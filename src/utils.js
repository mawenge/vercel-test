/**
 * Restrict a number to the inclusive range [min, max].
 *
 * @param {number} value The number to clamp.
 * @param {number} min The lower bound of the range.
 * @param {number} max The upper bound of the range.
 * @returns {number} The clamped value within [min, max].
 */
export function clamp(value, min, max) {
  if (min > max) {
    throw new RangeError("min must be less than or equal to max");
  }
  return Math.min(Math.max(value, min), max);
}

/**
 * Arithmetic mean of a list of numbers.
 *
 * @param {number[]} numbers The numbers to average.
 * @returns {number} The arithmetic mean of the numbers.
 */
export function average(numbers) {
  const total = numbers.reduce((sum, n) => sum + n, 0);
  return total / numbers.length;
}

/**
 * Turn a title into a URL slug, e.g. "Hello, World!" -> "hello-world".
 *
 * @param {string} text The text to convert into a slug.
 * @returns {string} The slugified text.
 */
export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-");
}
