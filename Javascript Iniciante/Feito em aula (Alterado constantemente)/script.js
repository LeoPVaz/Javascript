class Person {

    age = 0;

    constructor(name) {
        this.name = name;

    }

  
}

function createPerson(name, age){
    let p = new Person(name);
    p.age = age;
    return p;
}

let p1 = createPerson("Anna",15);
let p2 = createPerson("Laura",18);
let p3 = createPerson("Jane",32);




console.log(`P1 = ${p1.name} tem ${p1.age} anos.`);
console.log(`P2 = ${p2.name} tem ${p2.age} anos.`);
console.log(`P3 = ${p3.name} tem ${p3.age} anos.`)
