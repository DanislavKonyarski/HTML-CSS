window.addEventListener("load", solve);

function solve() {
  const inputTitle = document.getElementById("title");
  const inputDescription = document.getElementById("description");
  const inputLabel = document.getElementById("label");
  const inputPoints = document.getElementById("points");
  const inputAssignee = document.getElementById("assignee");
  const btnCreate = document.getElementById("create-task-btn");
  const btnDelete = document.getElementById("delete-task-btn");
  const tasksSection = document.getElementById("tasks-section");
  const totalPoints = document.getElementById("total-sprint-points");
  const taskId = document.getElementById("task-id");

  let currentTotalPints = 0;
  let articaleId = 1;

  btnCreate.addEventListener("click", clickCreateTask);
  btnDelete.addEventListener("click", clickDeleteTask);

  function clickCreateTask() {
    currentTotalPints += Number(inputPoints.value);
    totalPoints.textContent = `Total Points: ${currentTotalPints}pts`;
    let classLabel = "";
    let span = "";
    if (inputLabel.value === "Feature") {
      span = "⊡";
      classLabel = "feature";
    } else if (inputLabel.value === "Low Priority Bug") {
      span = "☉";
      classLabel = "low-priority";
    } else {
      span = "⚠";
      classLabel = "high-priority";
    }

    let articale = document.createElement("article");
    articale.id = `task-${articaleId}`;
    articaleId++;
    articale.className = "task-card";

    let divFeature = document.createElement("div");
    divFeature.className = `task-card-label ${classLabel}`;
    divFeature.textContent =
      inputLabel.value + " "+ span;
    articale.appendChild(divFeature);

    let h3 = document.createElement("h3");
    h3.className = "task-card-title";
    h3.textContent = inputTitle.value;
    articale.appendChild(h3);

    let p = document.createElement("p");
    p.className = "task-card-description";
    p.textContent = inputDescription.value;
    articale.appendChild(p);

    let divPoints = document.createElement("div");
    divPoints.className = "task-card-points";
    divPoints.textContent = `Estimated at ${inputPoints.value} pts`;
    articale.appendChild(divPoints);

    let divAssignee = document.createElement("div");
    divAssignee.className = "task-card-assignee";
    divAssignee.textContent = `Assigned to: ${inputAssignee.value}`;
    articale.appendChild(divAssignee);

    let divActions = document.createElement("div");
    divActions.className = "task-card-actions";
    articale.appendChild(divActions);

    const button = document.createElement("button");
    button.textContent = "delete";
    divActions.appendChild(button);
    if (
      h3.textContent !== "" &&
      p.textContent !== "" &&
      divPoints.textContent !== `Estimated at  pts` &&
      divAssignee.textContent !== `Assigned to: `
    ) {
      tasksSection.appendChild(articale);
      inputTitle.value = "";
      inputDescription.value = "";
      inputLabel.value = "Feature";
      inputPoints.value = "";
      inputAssignee.value = "";
    }
    button.addEventListener("click", () => {
      inputTitle.placeholder = h3.textContent;
      inputDescription.placeholder = p.textContent;
      inputLabel.value = divFeature.textContent;
      inputPoints.placeholder = Number(divPoints.textContent.split(" ")[2]);
      inputAssignee.placeholder = divAssignee.textContent.split(": ")[1];

      btnDelete.removeAttribute("disabled");
      btnCreate.disabled = true;

      inputTitle.disabled = true;
      inputDescription.disabled = true;
      inputLabel.disabled = true;
      inputPoints.disabled = true;
      inputAssignee.disabled = true;

      taskId.value = articale.id;
    });
  }

  function clickDeleteTask() {
    const pointsForSubtract = Number(inputPoints.placeholder);
    currentTotalPints -= pointsForSubtract;
    totalPoints.textContent = `Total Points: ${currentTotalPints}pts`;

    let currentArticale = document.getElementById(taskId.value);
    currentArticale.remove();

    inputTitle.removeAttribute("disabled");
    inputDescription.removeAttribute("disabled");
    inputLabel.removeAttribute("disabled");
    inputPoints.removeAttribute("disabled");
    inputAssignee.removeAttribute("disabled");

    inputTitle.placeholder = "Task title...";
    inputDescription.placeholder = "Task description...";
    inputLabel.placeholder = "Feature";
    inputPoints.placeholder = "Task estimation points...";
    inputAssignee.placeholder = "Task assignee...";

    inputTitle.value = "";
    inputDescription.value = "";
    inputLabel.value = "Feature";
    inputPoints.value = "";
    inputAssignee.value = "";

    btnDelete.disabled = true;
    btnCreate.removeAttribute("disabled");
  }
}
