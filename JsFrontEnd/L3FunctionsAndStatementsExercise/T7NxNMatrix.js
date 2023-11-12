function nxNMatrix(num) {
  let returnStr = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      returnStr += num + " ";
    }
    returnStr = returnStr.trim() + "\n";
  }

  return returnStr;
}

console.log(nxNMatrix(3));
