function createPerson(name, lastName, age, food) {
    return {
        name,
        lastName,
        age,
        food,
        getFull() {
            return `${this.name} ${this.lastName} tem ${this.age} anos, e gosta de comer ${this.food}.`;
        },
        comer() {
            return `${this.name} come ${this.food}, e fica felis!`;
        }
    }


}

let person1 = createPerson('Anna', 'Silva', 12, "Macarão");
let person2 = createPerson('Julia', 'Leite', 14, "Maçã");

console.log(person1.getFull());
console.log(person1.comer());
console.log(person2.getFull());
console.log(person2.comer());