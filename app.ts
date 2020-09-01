function add (n1: number, n2: number) {
  return n1 + n2
};

const number1 = 5;
const number2 = 3;

// Only assign types to variables that might change.
let number3: number;
number3 = 'string';

console.log(add(number1, number2));