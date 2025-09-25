// Тоже объект, внезапно
// const objNull = null;

// Самый маленький объект
// const objMin = {};
// console.log(objMin.__proto__);

// Способ создания объектов, если ничем другим не пользоваться
const objWithMethods = {
  name: "objWithMethods",
  hello() { console.log("I am " + this.name); },
}
//
// objWithMethods.hello();

// Метод можно добавить/изменить снаружи
// objWithMethods.hello = function() { console.log("I am " + this.name + " and you changed my method"); }
// objWithMethods.hello();

// Контекст метода можно поменять/или просто передать объект, как контекст для функции
const fn = (function () {
  console.log("I have access to " + this.name);
  this.hello();
});

fn.bind(objWithMethods)();

// В таком объекте все видно
// console.log(Object.keys(objWithMethods));
