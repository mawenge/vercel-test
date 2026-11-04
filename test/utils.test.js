import { test } from "node:test";
import assert from "node:assert/strict";
import { average, clamp, slugify } from "../src/utils.js";

test("clamp keeps values inside the range", () => {
  assert.equal(clamp(5, 0, 10), 5);
  assert.equal(clamp(-3, 0, 10), 0);
  assert.equal(clamp(42, 0, 10), 10);
});

test("clamp rejects an inverted range", () => {
  assert.throws(() => clamp(1, 10, 0), RangeError);
});

test("average of several numbers", () => {
  assert.equal(average([2, 4, 6]), 4);
});

test("average rejects an empty array", () => {
  assert.throws(
    () => average([]),
    new RangeError("numbers must not be empty"),
  );
});

test("slugify lowercases and joins words with hyphens", () => {
  assert.equal(slugify("Hello World"), "hello-world");
});
