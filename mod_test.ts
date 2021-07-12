import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.100.0/testing/asserts.ts";
import {
  angle,
  div,
  dot,
  isZero,
  length,
  length2,
  minus,
  mix,
  mul,
  negate,
  normalize,
  plus,
  reflect,
  refract,
  shift,
  sum,
  times,
  zero,
} from "./mod.ts";

Deno.test("zero", () => {
  assertEquals(zero([]), []);
  assertEquals(zero([1, 2]), [0, 0]);
});

Deno.test("isZero", () => {
  assertEquals(isZero([]), true);
  assertEquals(isZero([0]), true);
  assertEquals(isZero([0, 0]), true);
  assertEquals(isZero([0, 1]), false);
  assertEquals(isZero([1]), false);
});

Deno.test("negate", () => {
  assertEquals(negate([]), []);
  assertEquals(negate([0]), [-0]);
  assertEquals(negate([1]), [-1]);
  assertEquals(negate([1, -1]), [-1, 1]);
});

Deno.test("sum", () => {
  assertEquals(sum([]), 0);
  assertEquals(sum([1, 2, 3]), 6);
});

Deno.test("plus", () => {
  assertEquals(plus([1, 2], [3, 4]), [4, 6]);
});

Deno.test("minus", () => {
  assertEquals(minus([4, 3], [2, 1]), [2, 2]);
});

Deno.test("times", () => {
  assertEquals(times([1, 2], [3, 4]), [3, 8]);
});

Deno.test("dot", () => {
  assertEquals(dot([1, 2], [3, 4]), 11);
});

Deno.test("mul", () => {
  assertEquals(mul([1, 2], 3), [3, 6]);
});

Deno.test("div", () => {
  assertEquals(div([4, 3], 2), [2, 1.5]);
});

Deno.test("reflect", () => {
  assertEquals(reflect([1, 0], [1, 0]), [-1, 0]);
});

Deno.test("mix", () => {
  assertEquals(mix([1, 2], [3, 4], 0.5), [2, 3]);
});

Deno.test("refract", () => {
  // TODO: actual tests
  assert(typeof refract === "function");
});

Deno.test("angle", () => {
  const E = 0.0001;
  const TAU = Math.PI * 2;
  assert(angle([1, 0], [1, 0]) - 0 < E);
  assert(angle([1, 0], [-1, 0]) - TAU / 2 < E);
  assert(angle([1, 0], [0, 1]) - TAU / 4 < E);
  assert(angle([1, 0], [1, 1]) - TAU / 8 < E);
});

Deno.test("length2", () => {
  assertEquals(length2([1, 2, 3]), 14);
});

Deno.test("length", () => {
  assertEquals(length([3, 4]), 5);
});

Deno.test("normalize", () => {
  assertEquals(normalize([2, 0]), [1, 0]);
  assertEquals(normalize([0, 0]), [0, 0]);
});

Deno.test("shift", () => {
  assertEquals(shift([0, 1, 2, 3], 2), [2, 3, 0, 1]);
});
