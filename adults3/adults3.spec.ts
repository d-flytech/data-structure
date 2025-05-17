import { describe, it, expect } from "vitest";
import { getAdults } from "./adults3";
import { Person } from "../types";

describe("getAdults function", () => {
    it("Should return only names of adults", () => {
        const persons: Person[] = [
            { name: "Rob", age: 25, bsn: 123456, gender: "male" },
            { name: "Arla", age: 15, bsn: 257654, gender: "female" },
            { name: "Pam", age: 21, bsn: 315421, gender: "female" },
            { name: "Beer", age: 46, bsn: 463456, gender: "x" },
            { name: "Pippi", age: 13, bsn: 533446, gender: "female" },
        ];

        expect(getAdults(persons)).toEqual(["Rob", "Pam", "Beer"]);
    });

    it("Should return empty array if no adults are present", () => {
        expect(getAdults([])).toEqual([]);
    });
    it("Should return empty array if null is provided", () => {
        expect(getAdults(null)).toEqual([]);
    });

    it("Should return empty array if undefined is provided", () => {
        expect(getAdults(undefined)).toEqual([]);
    });
});
