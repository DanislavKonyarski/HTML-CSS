window.addEventListener("load", solve);

function solve(){

    let placeInput = getElement("place");
    let actionInput = getElement("action");
    let personInput = getElement("person");
    let taskListItem = getElement("task-list");
    let doneListItem = getElement("done-list");
    let btnAdd = getElement("add-btn")

    if(placeInput!==""&&
    actionInput!==""&&
    personInput!==""){
        btnAdd.addEventListener("click",clickAdd);
    }

    function clickAdd() {
        let li = createElement("li","","","clean-task");
        let article = createElement("article");
        let pPlace = createElement("p","",`Place:${placeInput.value}`);
        let pAction = createElement("p","",`Action:${actionInput.value}`);
        let pPerson = createElement("p","",`Person:${personInput.value}`);
        let div = createElement("div","","","buttons");
        let editBtn = createElement("button","","Edit","edit");
        let doneBtn = createElement("button","","Done","done");
        taskListItem.appendChild(li);
        li.appendChild(article);
        li.appendChild(div);
        article.appendChild(pPlace);
        article.appendChild(pAction);
        article.appendChild(pPerson);
        div.appendChild(editBtn);
        div.appendChild(doneBtn);
        editBtn.addEventListener("click",()=>{
            placeInput.value = pPlace.textContent.split(":")[1];
            actionInput.value = pAction.textContent.split(":")[1];
            personInput.value = pPerson.textContent.split(":")[1];
            li.remove();
        });
        doneBtn.addEventListener("click",()=>{
            
            li.remove();
            li.removeAttribute("class");
            doneListItem.appendChild(li);
            div.remove();
            let deleteButton = createElement("button","","Delete","delete");
            li.appendChild(deleteButton);

            deleteButton.addEventListener("click",()=>{
                li.remove();
            });
        });
        placeInput.value = "";
        actionInput.value = "";
        personInput.value = "";

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
}