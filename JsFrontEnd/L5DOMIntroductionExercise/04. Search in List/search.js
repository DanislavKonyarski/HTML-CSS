function search() {
  const input = document.querySelectorAll("li");
  const match = document.getElementById("searchText").value;
  let count = 0;
  for (let index = 0; index < input.length; index++) {
   let currentStr = input[index].textContent;
    if (currentStr.includes(match)) {
      count++;
      document.querySelector(
        `ul :nth-child(` + (index + 1) + `)`
      ).style.fontWeight = "bold";
      document.querySelector(
        `ul :nth-child(` + (index + 1) + `)`
      ).style.textDecoration = "underline";
    }
  }
  document.getElementById("result").textContent = `${count} matches found`;
}
