function factorialDivision(num1, num2) {
  let sum1 = num1;
  let sum2 = num2;
  for (let i = 1; i < num1; i++) {
    sum1 *= i;
  }
  for (let i = 1; i < num2; i++) {
    sum2 *= i;
  }
  return parseFloat(sum1/sum2).toFixed(2);
}

console.log(factorialDivision(5, 3));
