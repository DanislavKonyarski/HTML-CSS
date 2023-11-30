function solve() {
   document.querySelector("#btnSend").addEventListener("click", onClick);
 
   function onClick() {
     let input = document.querySelector("#inputs > textarea").value;
     let inputArr = [];
     let count = 0;
     input.split('"').forEach((el) => {
       count++;
       if (count % 2 === 0) {
         inputArr.push(el);
       }
     });
 console.log(input);
 inputArr.forEach(e => console.log(e));
     let resturantMap = new Map();
 
     inputArr.forEach((e) => {
       let nameResturant = e.split(" - ")[0].trim();
       let workers = e.split(" - ")[1];
       if (resturantMap.has(nameResturant)) {
         resturantMap.set(
           nameResturant,
           resturantMap.get(nameResturant) + ", " + workers
         );
       } else {
         resturantMap.set(nameResturant, workers);
       }
     });
 
     let nameBestResturant = "";
     let bestAverageSalary = 0;
     [...resturantMap.entries()].forEach((e) => {
       let currentSalary = 0;
       let selaryArr = e[1].match(/[0-9]+/gm);
       selaryArr.forEach((el) => {
         currentSalary += Number(el) / selaryArr.length;
       });
       if (currentSalary > bestAverageSalary) {
         bestAverageSalary = currentSalary;
         nameBestResturant = e[0];
       }
     });
 
     let bestWorkersArr = resturantMap
       .get(nameBestResturant)
       .split(", ")
       .sort((a, b) => b.split(" ")[1] - a.split(" ")[1]);
     let bestSalaryWorker = Number(bestWorkersArr[0].split(" ")[1]).toFixed(2);
     let outputStr = "";
     bestWorkersArr.forEach((e) => {
       let nameWorker = e.split(" ")[0];
       let salary = e.split(" ")[1];
       outputStr += `Name: ${nameWorker} With Salary: ${salary} `;
     });
 
     document.querySelector(
       "#bestRestaurant > p"
     ).textContent = `Name: ${nameBestResturant} Average Salary: ${bestAverageSalary.toFixed(2)} Best Salary: ${bestSalaryWorker}`;
     document.querySelector("#workers > p").textContent = outputStr.trim();
   }
 }