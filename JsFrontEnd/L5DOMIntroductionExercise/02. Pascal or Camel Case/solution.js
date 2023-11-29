function solve() {
  const text = document.getElementById("text").value;
  const command = document.getElementById("naming-convention").value;
  let currentArr = text.toLowerCase().split(" ");
  let result = "";

  if (command === "Camel Case") {
    for (let i = 0; i < currentArr.length; i++) {
      if (i === 0) {
        result += currentArr[i];
      } else {
        let firstChar = currentArr[i].charAt(0);
        let firstCharToUpper = currentArr[i].charAt(0).toUpperCase();
        result += currentArr[i].replace(firstChar, firstCharToUpper);
      }
    }
  } else if (command === "Pascal Case") {
    for (let i = 0; i < currentArr.length; i++) {
      let firstChar = currentArr[i].charAt(0);
      let firstCharToUpper = currentArr[i].charAt(0).toUpperCase();
      result += currentArr[i].replace(firstChar, firstCharToUpper);
    }
  } else {
    result = "Error!";
  }
  document.getElementById("result").textContent = result;
}
