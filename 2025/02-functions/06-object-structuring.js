const { log } = console;

// Присваивание
const source = { green: 'зеленый', yellow: 'желтый', red: 'красный' };

// const { yellow, red, green } = source; log(green);
// const { green } = source;

// Параметры фунции
//
// const fn = (obj) => console.log(obj.green);
// const fn = ({ green }) => console.log(green);
// const fn = ({ blue = 'синий' }) => console.log(blue);

// fn({ ...source, blue: 'голубой' });
//
// Копирование, добавление элементов, объединение
//
const appendix = { white: 'белый', blue: 'синий', green: 'изумрудный' }
//
const sourceCopy = { ...source }
// const sourcePlus = { ...source, green: 'изумрудный', blue: 'синий' }; log(sourcePlus);

// delete sourcePlus.red;
//
// log(sourcePlus);
const whole = { ...source, ...appendix }; log(whole);
