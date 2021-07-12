export type VecType = "N" | number;

export type Node = Func | {
  kind: string;
};

export type Param = {
  name: string;
  optional: boolean;
  tsType?: {
    repr: string;
  };
};

export type ReturnType = {
  repr: string;
};

export type Func = {
  kind: "function";
  name: string;
  jsDoc: null | string;
  functionDef: {
    params: Param[];
    returnType: ReturnType;
  };
};

export function stringify(nodes: Node[]) {
  const funcs = nodes
    .filter((x) => x.kind === "function")
    .map((x) => x as Func);
  return Mod(funcs);
}

const types: VecType[] = ["N", 2, 3, 4];

const HEADER = `
// NOTE: This file was generated automatically.
// Direct changes to this file will be overwritten.
// Generate this file by running \`deno run -A cli.ts\

import * as vecn from "./vecn.ts"

${types.map(VecDef).join("\n")}
`.trim();

function VecDef(n: VecType) {
  let def = "X[];";
  if (typeof n === "number") {
    const xs = "X".repeat(n).split("").join(", ");
    def = `[${xs}];`;
  }
  return `export type Vec${n}<X = number> = ${def}`;
}

function FuncDef(func: Func, n: VecType): string {
  return FuncHead(func).replace("VecN", `Vec${n}`) + ";\n";
}

function Mod(funcs: Func[]) {
  return [
    HEADER,
    "",
    ...funcs.map(Func),
  ].join("\n");
}

function Param(param: Param): string {
  if (!param.tsType) throw new Error(`param has no tsType: ${param.name}`);
  return `${param.name}: ${param.tsType.repr}`;
}

function Params(func: Func) {
  return func.functionDef.params.map(Param).join(", ");
}

function Args(func: Func) {
  return func.functionDef.params.map((param) => param.name).join(", ");
}

function FuncImpl(func: Func) {
  return `return vecn.${func.name}(${Args(func)});`;
}

function FuncBody(func: Func) {
  return `{\n  ${FuncImpl(func)}\n}`;
}

function FuncHead(func: Func) {
  const type = func.functionDef.returnType.repr;
  return `export function ${func.name}(${Params(func)}): ${type}`;
}

function Func(func: Func) {
  const defs = types
    .map((type) => FuncDef(func, type))
    .join("");
  return `${Docs(func)}${defs}${FuncHead(func)} ${FuncBody(func)}\n`;
}

function Docs(func: Func): string {
  if (!func.jsDoc) return "";
  const body = func.jsDoc
    .split("\n")
    .map((x) => ` * ${x}`)
    .join("\n");
  return `/**\n${body}\n */\n`;
}
