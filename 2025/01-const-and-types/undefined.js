console.log(typeof 3);
console.log(typeof 'hello');

console.log(typeof obj);

console.log(typeof (typeof undefined));

const f = (undefined) => {
  let a;

  return '';
}

console.log(void f(1));
