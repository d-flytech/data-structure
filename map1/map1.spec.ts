import { describe, it, expect } from "vitest";
import { multiplyArrayBySix } from "./map1";

describe("multiplayArrayBySix function", () => {
  it("Should multiply each number by 6", () => {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput = [6, 12, 18, 24, 30];

    expect(multiplyArrayBySix(input)).toEqual(expectedOutput);
  });
  //extra test for empty array
  it("Should return an empty array when input is empty", () => {
    expect(multiplyArrayBySix([])).toEqual([]);
  });
});
