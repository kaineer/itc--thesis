// find, findIndex

const array = [1, 1, 2, 3, 5, 8, 13];

// Выводит первое значение, для которого функция
//   возвращает true
console.log(array.find((x) => x % 2 === 0)) // => 2
// Выводит индекс значения, для которого функция
//   возвращает true
console.log(array.findIndex((x) => x > 3)) // => 4
