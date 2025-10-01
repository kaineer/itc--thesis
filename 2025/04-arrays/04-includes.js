// includes, indexOf

const array = [1, 1, 2, 3, 5, 8, 13];

// Возвращает true, если значение есть в массиве
console.log(array.includes(5)); // => true

// Выводит индекс, либо -1 если значения нет
console.log(array.indexOf(8)); // => 5
console.log(array.indexOf(4)); // => -1
