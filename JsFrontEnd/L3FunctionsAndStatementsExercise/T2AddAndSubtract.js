function addAndSubtract(num1, num2, num3) {
  function sum(a, b) {
    return a + b;
  }
  function subtract(x, y) {
    return x - y;
  }
  return subtract(sum(num1, num2), num3);
}
console.log(addAndSubtract(23, 6, 10));
