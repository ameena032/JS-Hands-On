class Person { constructor(name) { this.name = name; } greet() { return `Hi, ${this.name}`; } }
let person = new Person("Alice");
output.textContent = person.greet();
