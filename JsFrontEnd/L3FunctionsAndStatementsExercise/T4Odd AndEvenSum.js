function oddAndEvenSum(num) {
  let currentStr = "" + num;
  let sumOdd = 0;
  let sumEven = 0;
  for (let i = 0; i < currentStr.length; i++) {
    if (parseInt(currentStr[i]) % 2 == 0) {
      sumEven += parseInt(currentStr[i]);
    } else {
      sumOdd += parseInt(currentStr[i]);
    }
  }
  return "Odd sum = "+sumOdd+", Even sum = "+sumEven;
}

console.log(oddAndEvenSum(1000435));
