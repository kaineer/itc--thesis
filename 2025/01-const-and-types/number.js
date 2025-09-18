const a = 5;
const pi = 3.1415;

const what = 1 / 0;

console.log(what);
console.log(what - what);

const nan = what - what;

console.log(nan === nan);

const nan2 = parseInt('notanumber');

const value = parseInt('3415');
const short = +'3415';

console.log(nan2);
console.log(value, short);

const left = 34;

console.log(left % 5);

console.log(0.1 + 0.2);
