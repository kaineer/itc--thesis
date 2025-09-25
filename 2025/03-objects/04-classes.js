// Классы, наследование и тп

// class Creature {
//   constructor(type = "creature") {
//     this.type = type;
//   }
// }

class Person extends Creature {
  constructor(name) {
    // super("human");
    this.name = name;
  }
  hello() {
    console.log("I am " + this.name);
    // console.log("and I am " + this.type);
    console.log("My class is Person");
  }
}

const john = new Person("John");
john.hello();
