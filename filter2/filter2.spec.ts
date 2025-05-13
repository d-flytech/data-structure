import { describe, it, expect } from "vitest";
import { filterNumbers } from "./filter2";

describe("filterNumbers function", () => {
    it("should return an array with odd numbers", () => {
        const numbers = [1, 2, 3, 4, 5];
        const result = filterNumbers(numbers, "odd");
        expect(result).toEqual([1, 3, 5]);
    });
    it("should return an array with even numbers", () => {
        const numbers = [1, 2, 3, 4, 5];
        const result = filterNumbers(numbers, "even");
        expect(result).toEqual([2, 4]);
    });
});
