const persons = [
    { name: 'Rob', age: 25, bsn: 123456, gender: 'male' },
    { name: 'Arla', age: 15, bsn: 257654, gender: 'female' },
    { name: 'Pam', age: 21, bsn: 315421, gender: 'female' },
    { name: 'Beer', age: 46, bsn: 463456, gender: 'x' },
    { name: 'Pippi', age: 13, bsn: 533446, gender: 'female' }
];

function getFemales() {
    let adults = persons.filter(person => person.gender === 'female').map(person => person.name); 
    console.log(`${adults.join( ' , ')} are females.`)
};

getFemales();

//used Array.filter() to return all girls/women
