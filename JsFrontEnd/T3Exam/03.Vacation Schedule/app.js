let baseUrl = "http://localhost:3030/jsonstore/tasks";

let nameInput = getElement("name");
let daysInput = getElement("num-days");
let dateInput = getElement("from-date");
let listItem = getElement("list");
let btnAdd = getElement("add-vacation");
let btnEdit = getElement("edit-vacation");
let btnLoad = getElement("load-vacations");
let currentId = "";
btnLoad.addEventListener("click", clickLoad);
btnAdd.addEventListener("click", clickAdd);
btnEdit.addEventListener("click", clickEdit);

function clickLoad() {
  listItem.innerHTML = "";

  fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => {
      Object.entries(data).forEach((e) => {
        let id = e[1]._id;
        let name = e[1].name;
        let days = e[1].days;
        let date = e[1].date;

        let div = createElement("div", id, "container");
        let h2 = createElement("h2", "", "", "", name);
        let h3Date = createElement("h3", "", "", "", date);
        let h3Days = createElement("h3", "", "", "", days);
        let changeBtn = createElement("button", "", "change-btn", "", "Change");
        let doneBtn = createElement("button", "", "done-btn", "", "Done");

        div.appendChild(h2);
        div.appendChild(h3Date);
        div.appendChild(h3Days);
        div.appendChild(changeBtn);
        div.appendChild(doneBtn);
        listItem.appendChild(div);
        changeBtn.addEventListener("click", async () => {
          currentId = div.id;
          nameInput.value = h2.textContent;
          dateInput.value = h3Date.textContent;
          daysInput.value = h3Days.textContent;
          div.remove();
          btnAdd.disabled = true;
          btnEdit.disabled = false;
        });
        doneBtn.addEventListener("click", () => {
          fetch(`${baseUrl}/${div.id}`, {
            method: "DELETE",
          }).then(clickLoad());
        });
      });
    });
  btnEdit.disabled = true;
}

function clickAdd(e) {
  e.preventDefault();

  let currentObject = {
    name: nameInput.value,
    days: daysInput.value,
    date: dateInput.value,
  };
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(currentObject),
  });

  nameInput.value = "";
  daysInput.value = "";
  dateInput.value = "";
  clickLoad();
}

async function clickEdit(e) {
  e.preventDefault();
  let currentObject = {
    name: nameInput.value,
    days: daysInput.value,
    date: dateInput.value,
    _id: currentId,
  };
 await fetch(`${baseUrl}/${currentId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(currentObject),
  }).then(clickLoad());

  
  nameInput.value = "";
  dateInput.value = "";
  daysInput.value = "";
  btnAdd.disabled = false;
  btnEdit.disabled = true;
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
