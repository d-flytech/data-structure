import { describe, it, expect } from "vitest";
import { addPerson } from "./push6";
import { Person } from "../types";

describe("addPerson function", () => {
    const newPerson: Person = { name: "Box", age: 35, bsn: 654555, gender: "male" };
    it("should return the new person", () => {
        const persons: Person[] = [
            { name: "Rob", age: 25, bsn: 123456, gender: "male" },
            { name: "Arla", age: 15, bsn: 257654, gender: "female" },
            { name: "Pam", age: 21, bsn: 315421, gender: "female" },
            { name: "Beer", age: 46, bsn: 463456, gender: "x" },
            { name: "Pippi", age: 13, bsn: 533446, gender: "female" },
        ];

        const result = addPerson(persons, newPerson);

        expect(result).toHaveLength(6);
        expect(result).toContainEqual(newPerson);
    });

    it.each([
        { input: [], desc: "an empty array" },
        { input: null, desc: "null" },
        { input: undefined, desc: "undefined" }
    ])("adds new person and returns an array containing only that person when the input is null, an empty array, or undefined",
        ({ input, desc }) => {
            const result = addPerson(input as Person[] | null | undefined, newPerson);
            expect(result).toEqual([newPerson]);
        });
});


