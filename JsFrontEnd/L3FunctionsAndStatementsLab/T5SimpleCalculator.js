function simpleCalculator( num1, num2, operator) {
  let operators = {
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2,
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
  };
  return operators[operator](num1,num2);
}

console.log(simpleCalculator(5,5, "multiply"))