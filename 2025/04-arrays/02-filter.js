// filter, every, some

const array = [1, 1, 2, 3, 5, 8, 13];

// every
console.log(array.every((v) => v % 2 === 1)); // => false
console.log(array.every((v) => v > 0)); // => true

// some
console.log(array.some((v) => v % 2 === 0));
// Выполнит функцию только до момента, пока ф-я не вернет true

// filter
console.log(array.filter((v) => v >= 5));
// Возвращает значения больше или равные 5
