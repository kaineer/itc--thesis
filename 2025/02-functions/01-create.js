const { log } = console;
const to = (obj) => (log(typeof obj), (typeof obj === 'function' && log(obj())));

// function fn1() { return 1; }
// to(fn1);

// const fn2 = function () { return 2; }
// to(fn2);
//
// const fn3 = () => 3; to(fn3)
// const fn3_1 = () => { return 3; }; to(fn3_1)
// const fn3_0 = () => ({}); to(fn3_0)
//
// const fn4 = ({fn4(){return 4;}}).fn4; to(fn4);

// const fn5 = new Function('return 5'); to(fn5)
