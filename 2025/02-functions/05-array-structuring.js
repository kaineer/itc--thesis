const { log } = console;

// Присваивание
const source = ['green', 'yellow', 'red'];

// const [ green, yellow, red ] = source;
// const [ green, ...rest ] = source;
// const [ green ] = source;
//
// log(green);
//

// Параметры функции
// const fn = (list) => { console.log(list[0]); }
// const fn = ([, second]) => { console.log(second); }
//
// fn([1, 2, 3]);

// Произвольное количество аргументов функции
// 1. arguments
// 2. ...args
//
// const fn = (...args) => console.log(args);
//
// fn(1, 2, 3, 4);
//
// const fn2 = (...args) => fn(...args);
//
// + где можно использовать позиционные аргументы
//   (в начале можно, в конце не имеет смысла)

// Копирование, добавление элементов к массиву, склеивание
//
const left = [1, 2, 3], right = [4, 5, 6];

const leftCopy = [...left];
// const leftPlus = [...left, 4]; log(leftPlus);
// const whole = [...left, ...right]; log(whole);
//
//
//
//
//
//
//
//
//
//
