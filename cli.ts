export const HELP = `
CLI for developing the "vec" library.

USAGE

\tvec
\t\t Runs generator, formatter, linter, and tests.

\tvec -w
\t\tStart file watcher.

\tvec --help
\t\tPrint this help text.

PERMISSIONS

\t--allow-write=mod.ts
\t\tFor generating the mod.ts file.

\t--allow-read=vecn.ts
\t\tFor reading the source code.

\t--allow-run=deno,edcb
\t\tFor parsing documentation from vecn.ts.
`;

import { getText, out } from "https://deno.land/x/jog@v0.0.8/mod.ts";
import { debounce, watch } from "https://deno.land/x/surv@v0.1.2/mod.ts";

if (import.meta.main) {
  if (Deno.args.length > 1) {
    error();
  } else if (Deno.args.length === 0) {
    build();
  } else if (Deno.args[0] === "--help") {
    help();
  } else if (Deno.args[0] === "-w") {
    start();
  } else {
    error();
  }
}

function help() {
  console.log(HELP.trim());
}

function error() {
  console.error("[error] vec received invalid args: " + Deno.args.join(" "));
  console.log("\n\tsee: vec --help");
}

function start() {
  console.log("file watcher starting...");
  watch(
    ["_gen.ts", "vecn.ts"],
    debounce(generate, 500),
  );
}

async function build() {
  console.log("[build] starting...");
  await generate();
  const process = Deno.run({
    cmd: ["edcb"],
  });
  const status = await process.status();
  if (status.success) {
    console.log("[build] success!");
  } else {
    console.error("[build] failed! ");
  }
}

async function generate() {
  // see: https://github.com/denoland/deno/issues/5548#issuecomment-643647953
  const stringify = (await import(`./_gen.ts?${Date.now()}`)).stringify;
  const docs = JSON.parse(
    await out({
      cmd: ["deno", "doc", "vecn.ts", "--json"],
      map: getText,
    }),
  );
  const ts = stringify(docs as Parameters<typeof stringify>[0]);
  await Deno.writeTextFile("mod.ts", ts);
  console.log(`${ts.length} bytes written to mod.ts`);
}
