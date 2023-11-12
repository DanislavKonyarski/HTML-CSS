function smallestOfThreeNumbers(num1, num2, num3) {
  let currentArr = [num1, num2, num3].sort((a, b) => a - b);
  return currentArr[0];
}

console.log(smallestOfThreeNumbers(2, 5, 3));
