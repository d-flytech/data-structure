const Person = {
    name: ['Rob', 'Arla', 'Pam', 'Beer', 'Pippi'],
    age: [25, 15, 21, 46, 13],
    bsn: [123456, 257654, 315421, 463456, 533446],
    gender: ['male', 'female', 'female', 'x', 'female'],
};

function getFemales() {
    let adults = Person.name.filter((_, index) => Person.gender[index] === 'female'); 
    console.log(`${adults} are females.`)
};

getFemales();

//used Array.filter() to return all girls/women
