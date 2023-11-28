function colorize() {
  const elementsArr = document.querySelectorAll("table tr");
  for (let index = 0; index < elementsArr.length; index++) {
    if (index % 2 !== 0) {
      elementsArr[index].style.backgroundColor = "Teal";
    }
  }
}
