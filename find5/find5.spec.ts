import { describe, it, expect } from "vitest";
import { findPersonByBsn } from "./find5";
import { Person } from "../types";

const persons: Person[] = [
    { name: "Rob", age: 25, bsn: 123456, gender: "male" },
    { name: "Arla", age: 15, bsn: 257654, gender: "female" },
    { name: "Pam", age: 21, bsn: 315421, gender: "female" },
    { name: "Beer", age: 46, bsn: 463456, gender: "x" },
    { name: "Pippi", age: 13, bsn: 533446, gender: "female" },
];

describe("findPersonByBsn function", () => {
    it("Should return the correct person by BSN", () => {
        expect(findPersonByBsn(persons, 463456)).toEqual({
            name: "Beer",
            age: 46,
            bsn: 463456,
            gender: "x",
        });
    });

    it("Should return undefined if no BSN matches", () => {
        expect(findPersonByBsn(persons, 9999999)).toBeUndefined();
    });
});
