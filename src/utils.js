/**
 * Restrict a number to the inclusive range [min, max].
 */
export function clamp(value, min, max) {
  if (min > max) {
    throw new RangeError("min must be less than or equal to max");
  }
  return Math.min(Math.max(value, min), max);
}

/**
 * Arithmetic mean of a list of numbers.
 */
export function average(numbers) {
  const total = numbers.reduce((sum, n) => sum + n, 0);
  return total / numbers.length;
}

/**
 * Turn a title into a URL slug, e.g. "Hello, World!" -> "hello-world".
 */
export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-");
}
