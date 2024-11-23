class Animal { sound() { return "Generic sound"; } }
class Dog extends Animal { sound() { return "Bark"; } }
let dog = new Dog();
output.textContent = dog.sound();
