let baseUrl = "http://localhost:3030/jsonstore/tasks/";

let locationInput = getElement("location");
let temperatureInput = getElement("temperature");
let dateInput = getElement("date");
let divList = getElement("list");
let btnAdd = getElement("add-weather");
let btnEdit = getElement("edit-weather");
let btnLoad = getElement("load-history");

btnLoad.addEventListener("click", clickLoad);
btnAdd.addEventListener("click", clickAdd);
btnEdit.addEventListener("click", clickEdit);

async function clickLoad() {
  divList.innerHTML = "";

  let response = await fetch(baseUrl);
  let weatherOnCity = await response.json();

  Object.entries(weatherOnCity).forEach((e) => {
    let id = e[1]._id;
    let date = e[1].date;
    let location = e[1].location;
    let temperature = e[1].temperature;
    console.log(e);
    // console.log(id, location, temperature, date);

    let divContainer = createElement("div", "", "container");
    let h2 = createElement("h2", "", "", "", `${location}`);
    let h3Date = createElement("h3", "", "", "", `${date}`);
    let h3Temperature = createElement(
      "h3",
      "celsius",
      "",
      "",
      `${temperature}`
    );
    let divButtons = createElement("div", `${id}`, "buttons-container");
    let btnChange = createElement("button", "", "change-btn", "", "Change");
    let btnDelete = createElement("button", "", "delete-btn", "", "Delete");
    divList.appendChild(divContainer);
    divContainer.appendChild(h2);
    divContainer.appendChild(h3Date);
    divContainer.appendChild(h3Temperature);
    divContainer.appendChild(divButtons);
    divButtons.appendChild(btnChange);
    divButtons.appendChild(btnDelete);

    btnChange.addEventListener("click", clickChange);
    btnDelete.addEventListener("click", ()=>{
        
      
        divContainer.remove();
      
        fetch(baseUrl + id, {
          method: "DELETE",
        });
        clickLoad();
    });
  });

  btnEdit.disabled = true;
}


async function clickAdd() {
  let currentObject = {
    date: dateInput.value,
    location: locationInput.value,
    temperature: temperatureInput.value,
  };

  let response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(currentObject),
  });

  locationInput.value = "";
  temperatureInput.value = "";
  dateInput.value = "";

  clickLoad();
}
let currentId = "";
async function clickChange(e) {
  let div = e.currentTarget.parentElement;
  currentId = div.id;

  locationInput.value = div.parentElement.querySelector("h2").textContent;
  dateInput.value = div.parentElement.querySelector("h3").textContent;
  temperatureInput.value =
    div.parentElement.querySelectorAll("h3")[1].textContent;

  div.parentElement.remove();

  btnEdit.disabled = false;
  btnAdd.disabled = true;
}
async function clickEdit() {
    
  let objectForEdit = {
    location: locationInput.value,
    temperature: temperatureInput.value,
    date: dateInput.value,
  };

  fetch(`${baseUrl}${currentId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(objectForEdit),
  })
    .then(clickLoad())
    .then(() => {
      btnEdit.disabled = true;
      btnAdd.disabled = false;
      locationInput.value = "";
      temperatureInput.value = "";
      dateInput.value = "";
    });
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
