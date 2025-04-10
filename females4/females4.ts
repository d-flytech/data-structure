// Defines Gender as a union type; an enum could also be used in more complex scripts
type Gender = "male" | "female" | "x";

interface Person {
    name: string;
    age: number;
    bsn: number;
    gender: Gender;
}

const persons: Person[] = [
    { name: 'Rob', age: 25, bsn: 123456, gender: 'male' },
    { name: 'Arla', age: 15, bsn: 257654, gender: 'female' },
    { name: 'Pam', age: 21, bsn: 315421, gender: 'female' },
    { name: 'Beer', age: 46, bsn: 463456, gender: 'x' },
    { name: 'Pippi', age: 13, bsn: 533446, gender: 'female' }
];

function getFemales(personArray: Person[]): String[] {
    return personArray.filter((person: Person) => person.gender === 'female').map((person: Person) => person.name);  
};

const females = getFemales(persons);
console.log(`${females.join( ' , ')} are females.`)

//used Array.filter() to return all girls/women