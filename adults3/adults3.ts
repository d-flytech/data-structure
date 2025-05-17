import { Person } from "../types";

//personArray makes the function reusable
export function getAdults(personArray: Person[] | null | undefined): string[] {
    if (personArray == null) return [];
    return personArray
        .filter((person) => person.age >= 18)
        .map((person) => person.name);
}

//used Array.filter() to filter out adults.
