// TODO:
function attachEvents() {
  const baseUrl = "http://localhost:3030/jsonstore/tasks/";

  const loadBtn = document.getElementById("load-board-btn");
  const addBtn = document.getElementById("create-task-btn");
  const inputTitle = document.getElementById("title");
  const inputDescription = document.getElementById("description");
  const taskToDo = document.querySelector("#todo-section>ul");
  const taskIn = document.querySelector("#in-progress-section>ul");
  const taskCode = document.querySelector("#code-review-section>ul");
  const taskDone = document.querySelector("#done-section>ul");

  loadBtn.addEventListener("click", clickLoad);

  async function clickLoad() {
    const response = await fetch(baseUrl);
    const listItem = await response.json();
    // console.log(Object.entries(listItem));

    for (const entri of Object.entries(listItem)) {
        const id = entri[0];
        // console.log(Object.entries(entri[1]));
        const title = Object.entries(entri[1])[0][1];
        const description = Object.entries(entri[1])[1][1];
        const status = Object.entries(entri[1])[2][1];
        // console.log(id ,title ,description ,status);
        const li = document.createElement("li");
        li.className = "task";
        li.id = id;
        const h3 = document.createElement("h3");
        h3.textContent = title;
        const p = document.createElement("p");
        const button = document.createElement("button");
        li.appendChild(h3);
        li.appendChild(p);
        
        if (status==="ToDo") {
            button.textContent = "Move to In Progress";
            li.appendChild(button);
            taskToDo.appendChild(li);
        }else if (status==="In Progress") {
            button.textContent = "Move to Code Review";
            li.appendChild(button);
            taskIn.appendChild(li);
        }else if(status==="Code Review"){
            button.textContent = "Move to Done";
            li.appendChild(button);
            taskCode.appendChild(li);
        }else if(status === "Done"){
            button.textContent = "Close";
            li.appendChild(button);
            taskDone.appendChild(li);
        }
    }
    
  }
}

attachEvents();
