export type VecN<X = number> = X[];

export function zero(v: VecN): VecN {
  return v.map(() => 0);
}

export function isZero(v: VecN): boolean {
  return v.reduce<boolean>((a, xi) => a && xi === 0, true);
}

export function negate(x: VecN): VecN {
  return x.map((xi) => -xi);
}

/**
 * Calculates the sum of the vector components.
 *
 * @param x is a vector.
 * @returns the sum of the components.
 */
export function sum(x: VecN): number {
  return x.reduce((y, xi) => y + xi, 0);
}

export function plus(a: VecN, b: VecN): VecN {
  return a.reduce<VecN>((y, ai, i) => [...y, ai + b[i]], []);
}

export function minus(a: VecN, b: VecN): VecN {
  return plus(a, negate(b));
}

export function times(a: VecN, b: VecN): VecN {
  return a.reduce<VecN>((y, ai, i) => [...y, ai * b[i]], []);
}

export function dot(a: VecN, b: VecN): number {
  return sum(times(a, b));
}

/**
 * Multiplies the components by a number.
 *
 * @param x is a vector.
 * @param t is the factor.
 * @returns a new scaled vector.
 */
export function mul(x: VecN, t: number): VecN {
  return times(x, [t, t, t]);
}

/**
 * Divides the components by a number.
 *
 * @param x is a vector.
 * @param t is the divisor.
 * @returns a new scaled vector.
 */
export function div(x: VecN, t: number): VecN {
  return mul(x, 1 / t);
}

export function reflect(v: VecN, n: VecN): VecN {
  return minus(v, mul(n, 2 * dot(v, n)));
}

/**
 * Get a point on a line between two vectors.
 */
export function mix(a: VecN, b: VecN, t: number): VecN {
  return mul(plus(a, b), t);
}

/**
 * @param v is the ray vector.
 * @param n is the surface normal.
 * @param index is the index of refraction.
 */
export function refract(v: VecN, n: VecN, index: number): VecN {
  const ci = -dot(v, n);
  const eta = ci < 0 ? index : 1 / index;
  const c2 = 1 - eta * eta * (1 - ci * ci);
  if (c2 < 0) return zero(v); // total internal reflection
  const c2root = Math.sqrt(c2);
  return plus(mul(v, eta), mul(n, eta * ci - c2root));
}

export function angle(a: VecN, b: VecN): number {
  return Math.acos(dot(normalize(a), normalize(b)));
}

export function length2(v: VecN): number {
  return dot(v, v);
}

export function length(v: VecN): number {
  return Math.sqrt(length2(v));
}

export function normalize(v: VecN): VecN {
  return isZero(v) ? v : div(v, length(v));
}

export function shift(v: VecN, n: number): VecN {
  const m = v.length;
  n = ((n % m) + m) % m;
  return [...v.slice(n), ...v.slice(0, n)];
}
