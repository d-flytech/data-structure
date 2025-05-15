import { Person } from '../types';

export function addAllAges(persons: Person[] | null | undefined): number {
    if (!persons) return 0;
    const totalAge: number = persons.reduce((sum: number, person: Person) => sum + person.age, 0);
    return totalAge;
}

//used Array reduce() to add all ages

