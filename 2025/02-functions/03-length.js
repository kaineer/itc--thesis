const { log } = console;

// function fn(a, b, c) { return 1; }
// function fn() { return 2; }
//
// function fn(...args) { return args.length }

// log(fn(1, 2, 3, 4))
//
// // arguments
//
function fn() { log(arguments.length); }

fn(1, 2);
