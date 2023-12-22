const { log, count } = require("console");

function sprint(arr) {
  const countFirstTasks = Number(arr[0]);
  let tasksArr = [];
  let commandArr = [];

  for (i = 1; i <= countFirstTasks; i++) {
    tasksArr.push(arr[i]);
  }
  for (i = countFirstTasks + 1; i < arr.length; i++) {
    commandArr.push(arr[i]);
  }

  for (const command of commandArr) {
    const commandTitle = command.split(":")[0];
    if (commandTitle === "Add New") {
      const name = command.split(":")[1];
      const taskId = command.split(":")[2];
      const title = command.split(":")[3];
      const status = command.split(":")[4];
      const points = command.split(":")[5];
      let flag = false;
      tasksArr.forEach((e) => {
        if (e.split(":")[0] === name) {
          flag = true;
        }
      });
      if (flag) {
        const commandForPush = `${name}:${taskId}:${title}:${status}:${points}`;
        tasksArr.push(commandForPush);
      } else {
        console.log(`Assignee ${name} does not exist on the board!`);
      }
    } else if (commandTitle === "Change Status") {
      const name = command.split(":")[1];
      const taskId = command.split(":")[2];
      const newStatus = command.split(":")[3];
      let flagId = false;
      let flagName = false;
      let count = 0;
      tasksArr.forEach((e) => {
        if (e.split(":")[1] === taskId) {
          flagId = true;
        }
        if (name === e.split(":")[0]) {
          flagName = true;
        }

        if (e.split(":")[1] === taskId && name === e.split(":")[0]) {
          const currentTask = `${e.split(":")[0]}:${e.split(":")[1]}:${
            e.split(":")[2]
          }:${newStatus}:${e.split(":")[4]}`;
          tasksArr.splice(count, 1, currentTask);
        }
        count++;
      });
      if (!flagName) {
        console.log(`Assignee ${name} does not exist on the board!`);
      } else {
        if (!flagId) {
          console.log(`Task with ID ${taskId} does not exist for ${name}!`);
        }
      }
    } else if (commandTitle === "Remove Task") {
      let currentArr = [];
      const name = command.split(":")[1];
      const indexForRemove = Number(command.split(":")[2]);
      let count = 0;
      tasksArr.forEach((e) => {
        if (e.split(":")[0] === name) {
          currentArr.push(e);
          if (indexForRemove === currentArr.length - 1) {
            tasksArr.splice(count, 1);
          }
        }
        count++;
      });
      if (currentArr.length === 0) {
        console.log(`Assignee ${name} does not exist on the board!`);
      } else if (currentArr.length - 1 < indexForRemove) {
        console.log("Index is out of range!");
      }
    }
  }

  let toDo = 0;
  let inProglress = 0;
  let codeReview = 0;
  let donePoints = 0;

  tasksArr.forEach((e) => {
    if (e.split(":")[3] === "ToDo") {
      toDo += Number(e.split(":")[4]);
    } else if (e.split(":")[3] === "In Progress") {
      inProglress += Number(e.split(":")[4]);
    } else if (e.split(":")[3] === "Done") {
      donePoints += Number(e.split(":")[4]);
    } else if (e.split(":")[3] === "Code Review") {
      codeReview += Number(e.split(":")[4]);
    }
  });

  console.log(`ToDo: ${toDo}pts\nIn Progress: ${inProglress}pts\nCode Review: ${codeReview}pts\nDone Points: ${donePoints}pts`);
  if (donePoints>=toDo+inProglress+codeReview) {
    console.log("Sprint was successful!");
  }else{
    console.log("Sprint was unsuccessful...");
  }

}

sprint( [
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP-1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
    ]
   
   );
