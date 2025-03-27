const Person = [
    { name: 'Rob', age: 25, bsn: 123456, gender: 'male' },
    { name: 'Arla', age: 15, bsn: 257654, gender: 'female' },
    { name: 'Pam', age: 21, bsn: 315421, gender: 'female' },
    { name: 'Beer', age: 46, bsn: 463456, gender: 'x' },
    { name: 'Pippi', age: 13, bsn: 533446, gender: 'female' }
];

function addNewPersons(newPerson) {
     Person.push(newPerson);
     return Person; 
}

const newPerson = {name:'Box', age: 35, bsn: 654555, gender: 'male'};
const updatePersonList = addNewPersons(newPerson);
console.log(updatePersonList);

//used Array push() to add a new person

