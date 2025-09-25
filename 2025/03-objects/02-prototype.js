//
function Person (name) {
  this.name = name;
}

// Person.prototype.hello = function () {
//   console.log(":: BEFORE Object.assign"); console.log("Hello, I am " + this.name); console.log("And I am using prototyping to access hello method");
//   console.log("");
// }

Object.assign(Person.prototype, {
  hello() {
    console.log(":: WITH Object.assign");
    console.log("Hello, I am " + this.name);
    console.log("And I am using prototyping to access hello method");
    console.log("");
  }
});

// Так создаются объекты с прототипом
const john = new Person("John");
// john.__proto__.hello
// john.hello();

// console.log("fn:", typeof john.hello);
// console.log("keys:", Object.keys(john));
// console.log("john.hello:", Object.hasOwn(john, 'hello'));
//
// console.log("obj.hello:", Object.hasOwn({ hello: 1 }, 'hello'));
//
const obj = {
  methodA: function () { console.log("Method A") },
  __proto__: {
    __proto__: {
      method() { console.log("A method") }
    }
  }
}

obj.methodA();
