import {Person} from '../types';

const persons: Person[] = [
    { name: 'Rob', age: 25, bsn: 123456, gender: 'male' },
    { name: 'Arla', age: 15, bsn: 257654, gender: 'female' },
    { name: 'Pam', age: 21, bsn: 315421, gender: 'female' },
    { name: 'Beer', age: 46, bsn: 463456, gender: 'x' },
    { name: 'Pippi', age: 13, bsn: 533446, gender: 'female' }
];

function addAllAges(persons: Person[]): number {
    const totalAge: number = persons.reduce((sum: number, person: Person) => sum + person.age, 0);
    return totalAge; 
}

console.log(`The total sum of all ages is: ${addAllAges(persons)} years.`);

//used Array reduce() to add all ages

