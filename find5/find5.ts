import { Person } from "../types";

export function findPersonByBsn(
    personsArray: Person[],
    bsn: number
): Person | undefined {
    return personsArray.find((person: Person) => person.bsn === bsn);
}

//used .find() to filter out specific bsn number
