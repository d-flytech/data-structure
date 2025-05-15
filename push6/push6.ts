import { Person } from '../types';

export function addPerson(persons: Person[] | null | undefined,
    newPerson: Person): Person[] {
    if (persons == null) {
        return [newPerson];
    }
    persons.push(newPerson);
    return persons;

};

//used Array push() to add a new person.