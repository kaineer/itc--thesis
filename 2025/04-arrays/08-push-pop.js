// push, pop
const array = [1, 2, 3];
console.log('исходный массив:', array);

array.push(4);
console.log('добавили элемент:', array);

console.log('получили из массива:', array.pop());
console.log('после вытаскивания элемента:', array);

// shift, unshift
array.unshift(0);
console.log('после добавления в начало:', array);

array.shift();
console.log('после удаления из начала:', array);
