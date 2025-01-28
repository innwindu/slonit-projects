const calculate = (a, b, fn) => fn(a, b);

const sum = (a, b) => a + b;
const diff = (a, b) => a - b;
const multiply = (a, b) => a * b;
const division = (a, b) => a / b;

const operations = {
  sum: sum,
  diff: diff,
  multiply: multiply,
  division: division,
};

const selectedOperation = 'sum';

console.log(calculate(2, 3, operations[selectedOperation]));
