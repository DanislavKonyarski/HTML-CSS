function perfectNumber(num) {
  let currentSum = 1;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      currentSum += i;
    }
  }
  if (currentSum === num) {
    return "We have a perfect number!";
  } else {
    return "It's not so perfect.";
  }
}

console.log(perfectNumber(28));
