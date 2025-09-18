const { log } = console;

function fn() { return this.name }
//
// 1. fn() // => undefined

// 2. fn.bind({name: 'john'})()
//
// 3. fn.call({name: 'john})
// 4. fn.apply({name: 'john})
// log(fn.call({name: 'john2'}));

//
function add(a, b) { return a + b }
//
// 3. fn.call(null, 1, 2)
// 4. fn.apply(null, [3, 4])
log(add.call(null, 1, 2))
log(add.apply(null, [3, 4]))
