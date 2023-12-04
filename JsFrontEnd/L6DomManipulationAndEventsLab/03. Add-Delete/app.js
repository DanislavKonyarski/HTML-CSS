function addItem() {
  const input = document.getElementById("newItemText").value;
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.textContent = "[Delete]";
  a.href = "#";

  if (input.length === 0) {
    return;
  }

  li.textContent = input;
  document.getElementById("items").appendChild(li).appendChild(a);
  document.getElementById("newItemText").value = "";
  a.addEventListener("click", deleteItem);

  function deleteItem() {
    li.remove();
  }
}
