// const obj = {};
//
// console.log(typeof obj);
//
// obj.color = 'white';
//
// console.log(obj);
//
// console.log(typeof []);

// const list = [1, 2, 3, 4, 5];
//
// console.log(list.slice(2));

const colors = ['red', 'green', 'blue'];
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }
// for (const i in colors) {
//   console.log(colors[i], typeof i);
// }

// for (const value of colors) {
//   console.log(value);
// }

console.log(Object.keys(colors));

const fruits = {
  apple: 10,
  bananas: 48
}

// for (const key in fruits) {
//   console.log(key, fruits[key]);
// }
console.log(Object.values(fruits));
