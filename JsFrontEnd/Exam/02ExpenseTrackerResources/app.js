window.addEventListener("load", solve);

function solve() {
  const expenseInput = getElement("expense");
  const amountInput = getElement("amount");
  const dateInput = document.getElementById("date");
  const btnAdd = document.getElementById("add-btn");
  const previous = document.getElementById("preview-list");
  const expenses = document.getElementById("expenses-list");
  const btnDelete = getElement("", "", ".btn.delete");

  btnAdd.addEventListener("click", clickAdd);
  btnDelete.addEventListener("click", () => location.reload());

  function clickAdd(e) {
    e.preventDefault();

    if (
      expenseInput.value === "" ||
      amountInput.value === "" ||
      dateInput.value === ""
    ) {
      return;
    }
    let currentdata = dateInput.value;
    let li = document.createElement("li");
    li.className = "expense-item";

    let article = createElement("article");
    li.appendChild(article);

    let pDemo = createElement("p", "p-demo", "", "", "Hi");
    console.log(pDemo.textContent);

    let pType = createElement("p", "", "", "", `Type: ${expenseInput.value}`);
    article.appendChild(pType);

    let pAmount = document.createElement("p");
    pAmount.textContent = `Amount: ${amountInput.value}$`;
    let currentAmount = amountInput.value;
    article.appendChild(pAmount);

    let pDate = document.createElement("p");

    pDate.textContent = `Date: ${dateInput.value}`;
    article.appendChild(pDate);

    let div = document.createElement("div");
    let btnEdit = document.createElement("button");
    btnEdit.className = "btn edit";
    btnEdit.textContent = "edit";
    let btnOk = document.createElement("button");
    btnOk.className = "btn ok";
    btnOk.textContent = "ok";
    div.appendChild(btnEdit);
    div.appendChild(btnOk);

    previous.appendChild(li);
    li.appendChild(div);

    btnAdd.disabled = true;

    expenseInput.value = "";
    amountInput.value = "";
    dateInput.value = "";

    btnEdit.addEventListener("click", clickEdit);
    btnOk.addEventListener("click", clickOk);

    function clickEdit() {
      expenseInput.value = pType.textContent;
      amountInput.value = currentAmount;
      dateInput.value = currentdata;

      li.remove();

      btnAdd.disabled = false;
    }

    function clickOk() {
      expenses.appendChild(li);
      div.remove();
      btnAdd.disabled = false;
    }
  }

  function getElement(id, className, tagName) {
    if (id) {
      return document.getElementById(id);
    }
    if (className) {
      return document.getElementsByClassName(className);
    }
    if (tagName) {
      return document.querySelector(tagName);
    }
  }

  function createElement(tag, id, className, value, textContent) {
    let currentElement = document.createElement(tag);
    if (id) {
      currentElement.id = id;
    }
    if (className) {
      currentElement.className = className;
    }
    if (value) {
      currentElement.value = value;
    }
    if (textContent) {
      currentElement.textContent = textContent;
    }
    return currentElement;
  }
}
