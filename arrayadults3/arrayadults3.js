const persons = [
    { name: 'Rob', age: 25, bsn: 123456, gender: 'male' },
    { name: 'Arla', age: 15, bsn: 257654, gender: 'female' },
    { name: 'Pam', age: 21, bsn: 315421, gender: 'female' },
    { name: 'Beer', age: 46, bsn: 463456, gender: 'x' },
    { name: 'Pippi', age: 13, bsn: 533446, gender: 'female' }
];

function getAdults() {
    return persons.filter(person => person.age >= 18).map(person => person.name); 
};

const adults = getAdults();
console.log(`${adults.join( `, `)} are adults.`);

//used Array.filter() to filter out adults