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

function findPersonByBsn(personsArray: Person[], bsn: number): Person | undefined {
    return personsArray.find((person: Person) => person.bsn === bsn);
}
 const bsnResult = findPersonByBsn(persons, 463456);
 console.log(bsnResult);

//used .find() to filter out specific bsn number 

