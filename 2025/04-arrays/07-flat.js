// flat, flatMap

const array = [1, [2, 3, [4, 5]]];

console.log(array.flat(2)); // => [1, 2, 3, 4, 5]

// array.flatMap(fn) -- то же самое, что array.flat().map(fn) (примерно)
