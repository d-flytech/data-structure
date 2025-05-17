import { Person } from "../types";

export function getFemales(personArray: Person[]): string[] {
  return personArray
    .filter((person: Person) => person.gender === "female")
    .map((person: Person) => person.name);
}

//used Array.filter() to return all girls/women
