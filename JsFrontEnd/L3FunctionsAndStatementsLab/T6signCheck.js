function signCheck(num, num1, num2) {
  if (num * num1 * num2 >= 0) {
    return "Positive";
  } else {
    return "Negative";
  }
}

console.log(signCheck(-6,-12,14))