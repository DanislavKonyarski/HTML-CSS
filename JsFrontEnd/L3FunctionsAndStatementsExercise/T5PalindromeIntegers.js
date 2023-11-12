function palindromeIntegers(arr) {
  let returnStr = "";

  for (let i = 0; i < arr.length; i++) {
    let currentStr = arr[i] + "";
    flag = true;
    for (let j = 0; j < currentStr.length / 2; j++) {
      let num1 = parseInt(currentStr.charAt(j));
      let num2 = parseInt(currentStr.charAt(currentStr.length - 1 - j));
      if (num1 !== num2) {
        flag = false;
        break;
      }
    }
    if (flag) {
      returnStr += "true\n";
    } else {
      returnStr += "false\n";
    }
  }
  return returnStr;
}

console.log(palindromeIntegers([32, 2, 232, 1010]));
