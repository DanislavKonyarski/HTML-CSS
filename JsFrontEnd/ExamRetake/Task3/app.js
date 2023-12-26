let baseUrl = "http://localhost:3030/jsonstore/gifts";

let giftInput = getElement("gift");
let forInput = getElement("for");
let priceinput = getElement("price");
let listItem = getElement("gift-list");
let btnAdd = getElement("add-present");
let btnEdit = getElement("edit-present");
let btnLoad = getElement("load-presents");
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
        let gift = e[1].gift;
        let name = e[1].for;
        let price = e[1].price;
        let id = e[1]._id;

        let divGift = createElement("div", "", "", "gift-sock");
        let divContainer = createElement("div", "", "", "container");
        let pGift = createElement("p", "", gift);
        let pName = createElement("p", "", name);
        let pPrice = createElement("p", "", price);
        let divButton = createElement("div", "", "", "buttons-container");
        let changeButton = createElement("button", "", "Change", "change-btn");
        let deleteButton = createElement("button", "", "Delete", "delete-btn");
        listItem.appendChild(divGift);
        divGift.appendChild(divContainer);
        divGift.appendChild(divButton);
        divContainer.appendChild(pGift);
        divContainer.appendChild(pName);
        divContainer.appendChild(pPrice);
        divButton.appendChild(changeButton);
        divButton.appendChild(deleteButton);

        changeButton.addEventListener("click", () => {
          giftInput.value = gift;
          forInput.value = name;
          priceinput.value = price;
          currentId = id;
          divGift.remove();
          btnAdd.disabled = true;
          btnEdit.disabled = false;
        });
        deleteButton.addEventListener("click", () => {
          fetch(`${baseUrl}/${id}`, {
            method: "DELETE",
          }).then(clickLoad());
        });
      });
    });
  btnEdit.disabled = true;
}

function clickAdd() {
  let currentObject = {
    gift: giftInput.value,
    for: forInput.value,
    price: priceinput.value,
  };
  if (
    giftInput.value !== "" &&
    forInput.value !== "" &&
    priceinput.value !== ""
  ) {
    fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(currentObject),
    }).then(()=>{
        clickLoad();
    giftInput.value = "";
    forInput.value = "";
    priceinput.value = "";
    });

    
  }
}

function clickEdit() {
  let currentObject = {
    gift: giftInput.value,
    for: forInput.value,
    price: priceinput.value,
    _id: currentId,
  };
  fetch(`${baseUrl}/${currentId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(currentObject),
  });
  clickLoad();
  giftInput.value = "";
  forInput.value = "";
  priceinput.value = "";
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

function createElement(tag, id, textContent, className, value) {
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
