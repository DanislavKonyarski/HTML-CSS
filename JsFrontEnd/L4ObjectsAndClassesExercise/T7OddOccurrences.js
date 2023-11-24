function oddOccurrences(inputString) {
    inputString = inputString.toLowerCase();
  let currentArr = inputString.split(" ");
  let outputArr = [];
  for (let i = 0; i < currentArr.length; i++) {
    let currentWord = currentArr[i];
    let count = 0;
    for (let j = 0; j < currentArr.length; j++) {
      if (currentWord === currentArr[j]) {
        count++;
      }
    }
    if (count % 2 != 0 && !outputArr.includes(currentWord)) {
      outputArr.push(currentWord);
    }
  }
  console.log(outputArr.join(" "));
}

oddOccurrences("Cake IS SWEET is Soft CAKE sweet Food");
