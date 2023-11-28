function sumTable() {
  const priceArticles = document.querySelectorAll("td:nth-child(even)");
  let sum = 0;
  for (let index = 0; index < priceArticles.length; index++) {
    sum += Number(priceArticles[index].textContent);
  }
  document.getElementById("sum").textContent = sum.toFixed(2);
}
