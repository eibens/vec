// NOTE: This file was generated automatically.
// Direct changes to this file will be overwritten.
// Generate this file by running `deno run -A cli.ts
import * as vecn from "./vecn.ts";

export type VecN<X = number> = X[];
export type Vec2<X = number> = [X, X];
export type Vec3<X = number> = [X, X, X];
export type Vec4<X = number> = [X, X, X, X];

export function zero(v: VecN): VecN;
export function zero(v: Vec2): VecN;
export function zero(v: Vec3): VecN;
export function zero(v: Vec4): VecN;
export function zero(v: VecN): VecN {
  return vecn.zero(v);
}

export function isZero(v: VecN): boolean;
export function isZero(v: Vec2): boolean;
export function isZero(v: Vec3): boolean;
export function isZero(v: Vec4): boolean;
export function isZero(v: VecN): boolean {
  return vecn.isZero(v);
}

export function negate(x: VecN): VecN;
export function negate(x: Vec2): VecN;
export function negate(x: Vec3): VecN;
export function negate(x: Vec4): VecN;
export function negate(x: VecN): VecN {
  return vecn.negate(x);
}

/**
 * Calculates the sum of the vector components.
 *
 * @param x is a vector.
 * @returns the sum of the components.
 */
export function sum(x: VecN): number;
export function sum(x: Vec2): number;
export function sum(x: Vec3): number;
export function sum(x: Vec4): number;
export function sum(x: VecN): number {
  return vecn.sum(x);
}

export function plus(a: VecN, b: VecN): VecN;
export function plus(a: Vec2, b: VecN): VecN;
export function plus(a: Vec3, b: VecN): VecN;
export function plus(a: Vec4, b: VecN): VecN;
export function plus(a: VecN, b: VecN): VecN {
  return vecn.plus(a, b);
}

export function minus(a: VecN, b: VecN): VecN;
export function minus(a: Vec2, b: VecN): VecN;
export function minus(a: Vec3, b: VecN): VecN;
export function minus(a: Vec4, b: VecN): VecN;
export function minus(a: VecN, b: VecN): VecN {
  return vecn.minus(a, b);
}

export function times(a: VecN, b: VecN): VecN;
export function times(a: Vec2, b: VecN): VecN;
export function times(a: Vec3, b: VecN): VecN;
export function times(a: Vec4, b: VecN): VecN;
export function times(a: VecN, b: VecN): VecN {
  return vecn.times(a, b);
}

export function dot(a: VecN, b: VecN): number;
export function dot(a: Vec2, b: VecN): number;
export function dot(a: Vec3, b: VecN): number;
export function dot(a: Vec4, b: VecN): number;
export function dot(a: VecN, b: VecN): number {
  return vecn.dot(a, b);
}

/**
 * Multiplies the components by a number.
 *
 * @param x is a vector.
 * @param t is the factor.
 * @returns a new scaled vector.
 */
export function mul(x: VecN, t: number): VecN;
export function mul(x: Vec2, t: number): VecN;
export function mul(x: Vec3, t: number): VecN;
export function mul(x: Vec4, t: number): VecN;
export function mul(x: VecN, t: number): VecN {
  return vecn.mul(x, t);
}

/**
 * Divides the components by a number.
 *
 * @param x is a vector.
 * @param t is the divisor.
 * @returns a new scaled vector.
 */
export function div(x: VecN, t: number): VecN;
export function div(x: Vec2, t: number): VecN;
export function div(x: Vec3, t: number): VecN;
export function div(x: Vec4, t: number): VecN;
export function div(x: VecN, t: number): VecN {
  return vecn.div(x, t);
}

export function reflect(v: VecN, n: VecN): VecN;
export function reflect(v: Vec2, n: VecN): VecN;
export function reflect(v: Vec3, n: VecN): VecN;
export function reflect(v: Vec4, n: VecN): VecN;
export function reflect(v: VecN, n: VecN): VecN {
  return vecn.reflect(v, n);
}

/**
 * Get a point on a line between two vectors.
 */
export function mix(a: VecN, b: VecN, t: number): VecN;
export function mix(a: Vec2, b: VecN, t: number): VecN;
export function mix(a: Vec3, b: VecN, t: number): VecN;
export function mix(a: Vec4, b: VecN, t: number): VecN;
export function mix(a: VecN, b: VecN, t: number): VecN {
  return vecn.mix(a, b, t);
}

/**
 * @param v is the ray vector.
 * @param n is the surface normal.
 * @param index is the index of refraction.
 */
export function refract(v: VecN, n: VecN, index: number): VecN;
export function refract(v: Vec2, n: VecN, index: number): VecN;
export function refract(v: Vec3, n: VecN, index: number): VecN;
export function refract(v: Vec4, n: VecN, index: number): VecN;
export function refract(v: VecN, n: VecN, index: number): VecN {
  return vecn.refract(v, n, index);
}

export function angle(a: VecN, b: VecN): number;
export function angle(a: Vec2, b: VecN): number;
export function angle(a: Vec3, b: VecN): number;
export function angle(a: Vec4, b: VecN): number;
export function angle(a: VecN, b: VecN): number {
  return vecn.angle(a, b);
}

export function length2(v: VecN): number;
export function length2(v: Vec2): number;
export function length2(v: Vec3): number;
export function length2(v: Vec4): number;
export function length2(v: VecN): number {
  return vecn.length2(v);
}

export function length(v: VecN): number;
export function length(v: Vec2): number;
export function length(v: Vec3): number;
export function length(v: Vec4): number;
export function length(v: VecN): number {
  return vecn.length(v);
}

export function normalize(v: VecN): VecN;
export function normalize(v: Vec2): VecN;
export function normalize(v: Vec3): VecN;
export function normalize(v: Vec4): VecN;
export function normalize(v: VecN): VecN {
  return vecn.normalize(v);
}
