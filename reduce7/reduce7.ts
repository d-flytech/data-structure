import { Person } from '../types';

export function addAllAges(persons: Person[] | null | undefined): number {
    if (!persons) return 0;

    let totalAge = 0;
    for (const person of persons) {
        totalAge += person.age;
    }
    return totalAge;
}

//used for loop to iterate over the array of objects and sum up the ages.



/*use Array reduce() to add all ages:

const totalAge: number = persons.reduce((sum: number, person: Person) => sum + person.age, 0);
return totalAge;*/
