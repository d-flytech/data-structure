import { describe, it, expect } from "vitest";
import { getFemales } from "./females4";
import { Person } from "../types";

describe("getFemales function", () => {
  it("Should return only names of females", () => {
    const persons: Person[] = [
      { name: "Rob", age: 25, bsn: 123456, gender: "male" },
      { name: "Arla", age: 15, bsn: 257654, gender: "female" },
      { name: "Pam", age: 21, bsn: 315421, gender: "female" },
      { name: "Beer", age: 46, bsn: 463456, gender: "x" },
      { name: "Pippi", age: 13, bsn: 533446, gender: "female" },
    ];

    expect(getFemales(persons)).toEqual(["Arla", "Pam", "Pippi"]);
  });

  it("Should return empty array if no females are present", () => {
    expect(getFemales([])).toEqual([]);
  });
});
