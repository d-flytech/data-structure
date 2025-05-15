import { describe, it, expect } from "vitest";
import { addAllAges } from "./reduce7";
import { Person } from "../types";

describe("addAllAges function", () => {
    it("Should add all ages", () => {
        const persons: Person[] = [
            { name: "Rob", age: 25, bsn: 123456, gender: "male" },
            { name: "Arla", age: 15, bsn: 257654, gender: "female" },
            { name: "Pam", age: 21, bsn: 315421, gender: "female" },
            { name: "Beer", age: 46, bsn: 463456, gender: "x" },
            { name: "Pippi", age: 13, bsn: 533446, gender: "female" },
        ];
        const result = addAllAges(persons);
    
        expect(result).toBe(120);
});

    it("Should return empty array if no adults are present", () => {
        expect(addAllAges([])).toBe(0);
    });
    it("Should return empty array if null is provided", () => {
        expect(addAllAges(null)).toBe(0);
    });

    it("Should return empty array if undefined is provided", () => {
        expect(addAllAges(undefined)).toBe(0);
    });
});