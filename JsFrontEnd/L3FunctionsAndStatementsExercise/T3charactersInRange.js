function charactersInRange(char1, char2) {
  let sortArr = [char1.charCodeAt(), char2.charCodeAt()].sort((a, b) => a - b);
  let returnArrChar = [];
  for (let i = sortArr[0]+1; i < sortArr[1]; i++) {
    returnArrChar.push(String.fromCharCode(i));
  }
  return returnArrChar.join(" ");
}

console.log(charactersInRange("#", ":"));
