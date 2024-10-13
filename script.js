function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
} 
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}


let firstNumber = 0;
let operator = '';
let secondNumber = 0;

function operate(operator, a, b) {
  switch(operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  }
}