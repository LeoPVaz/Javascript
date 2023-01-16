class Person {

    age = 0;

    constructor(name, age) {
        this.name = name;

    };
}

let p1 = new Person("Anna");
let p2 = new Person("Laura");
let p3 = new Person("Jane");

p1.age = 20;
p2.age = 14;
p3.age = 32;

console.log(`P1 = ${p1.name} tem ${p1.age} anos.`);
console.log(`P2 = ${p2.name} tem ${p2.age} anos.`);
console.log(`P3 = ${p3.name} tem ${p3.age} anos.`)
