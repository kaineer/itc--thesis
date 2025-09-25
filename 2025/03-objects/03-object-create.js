// Почти то же, что при простом создании объекта, но
//   объект становится прототипом
//
// @link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
//
const prototype = {
  name: "Human",
  hello() {
    console.log("I am " + this.name);
    console.log("I were created using Object.create()");
    console.log("");
  }
}

const person = Object.create(prototype);

person.hello();
