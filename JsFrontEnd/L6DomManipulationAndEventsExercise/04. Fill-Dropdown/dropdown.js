function addItem() {
  let text = document.getElementById("newItemText");
  let value = document.getElementById("newItemValue");
  let select = document.getElementById("menu");

  const options = document.createElement("option");

  if (text.value !== "" && value.value !== "") {
    options.value = value.value;
    options.textContent = text.value;
    select.appendChild(options);
    text.value = "";
    value.value = "";
  }
}
