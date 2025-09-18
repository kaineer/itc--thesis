//
const value = (d) => {
  return d;
};

const sum = (a, b) => {
  return a + b;
};

const sumall = (...nums) => {
  let sum = 0;
  nums.forEach((n) => (sum += n));
  return sum;
};

sumall(1, 2, 3);

const newmap = (arr, func) => {
  const result = [];
  for (const el of arr) {
    result.push(func(el));
  }
  return result;
};

const func = (obj) => (obj2) => ({ ...obj2, ...obj });

const students = [....]
const change = func({ mark: 5 });
const studensChanged = students.map(change);
