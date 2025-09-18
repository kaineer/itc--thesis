const str = 'hello';

console.log(str.slice(1));
console.log(str.slice(1, 3));

const foo = 'abc def';
const idx = foo.indexOf(' ');
console.log(foo.slice(0, idx));

const base = 'abc/def/ghi';
console.log(base.split('/').join(', '));

console.log(base.startsWith('abc'));
console.log(base.endsWith('ghi'));

const baseUrl = 'http://base.url/foo/'
if (baseUrl.endsWith('/')) {
  console.log(baseUrl + 'abc');
} else {
   console.log(baseUrl + '/' + 'abc');
}
