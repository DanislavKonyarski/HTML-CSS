function extractText() {
  let textArr = document.querySelectorAll("ul li");
  for (const iterator of textArr) {
    document.getElementById("result").value += iterator.textContent + "\n";
  }
}
