let baseUrl = "http://localhost:3030/jsonstore/tasks";

let nameInput = getElement("course-name");
let typeInput = getElement("course-type");
let descriptionInput = getElement("description");
let teachersInput = getElement("teacher-name");
let listItem = getElement("list");
let btnAdd = getElement("add-course");
let btnEdit = getElement("edit-course");
let btnLoad = getElement("load-course");
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
        let title = e[1].title;
        let type = e[1].type;
        let description = e[1].description;
        let teacher = e[1].teacher;
        let id = e[1]._id;

        let div = createElement("div", "", "", "container");
        let h2 = createElement("h2", "", title);
        let h3Teacher = createElement("h3", "", teacher);
        let h3Type = createElement("h3", "", type);
        let h4 = createElement("h4", "", description);
        let btnChange = createElement("button", "", "Edit Course", "edit-btn");
        let btnFinish = createElement(
          "button",
          "",
          "Finish Course",
          "finish-btn"
        );

        listItem.appendChild(div);
        div.appendChild(h2);
        div.appendChild(h3Teacher);
        div.appendChild(h3Type);
        div.appendChild(h4);
        div.appendChild(btnChange);
        div.appendChild(btnFinish);

        btnChange.addEventListener("click", () => {
          nameInput.value = h2.textContent;
          typeInput.value = h3Type.textContent;
          descriptionInput.value = h4.textContent;
          teachersInput.value = h3Teacher.textContent;
          currentId = id;
          div.remove();
          btnEdit.disabled = false;
          btnAdd.disabled = true;
        });
           btnFinish.addEventListener("click", () => {
            fetch(`${baseUrl}/${id}`,{
                method:"DELETE",
            }).then(clickLoad())
        });
      });
    });
  btnEdit.disabled = true;
}
function clickAdd(e) {
    e.preventDefault();
  let currentObject = {
    title: nameInput.value,
    type: typeInput.value,
    description: descriptionInput.value,
    teacher: teachersInput.value,
  };
  if (
    currentObject.type === "Long" ||
    currentObject.type === "Medium" ||
    currentObject.type === "Short"
  ) {
    fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(currentObject),
    });
  }
  clickLoad();
  nameInput.value = "";
  typeInput.value = "";
  descriptionInput.value = "";
  teachersInput.value = "";
}
function clickEdit(e) {
    e.preventDefault();
    let currentObject = {
        title: nameInput.value,
        type: typeInput.value,
        description: descriptionInput.value,
        teacher: teachersInput.value,
        _id: currentId
      };  
      if (
        currentObject.type === "Long" ||
        currentObject.type === "Medium" ||
        currentObject.type === "Short"
      ) {
      fetch(`${baseUrl}/${currentId}`,{
        method:"PUT",
        headers: { "Content-Type": "application/json" },
      body: JSON.stringify(currentObject),
      });}
      clickLoad();
      nameInput.value = "";
      typeInput.value = "";
      descriptionInput.value = "";
      teachersInput.value = "";
      btnEdit.disabled = true;
      btnAdd.disabled = false;
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
