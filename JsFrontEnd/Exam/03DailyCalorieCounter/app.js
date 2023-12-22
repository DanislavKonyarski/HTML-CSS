function slove() {
  const baseUrl = "http://localhost:3030/jsonstore/tasks/";

  const foodInput = document.getElementById("food");
  const timeInput = document.getElementById("time");
  const caloriesInput = document.getElementById("calories");
  const btnAddMeal = document.getElementById("add-meal");
  const btnEditMeal = document.getElementById("edit-meal");
  const btnLoadMeal = document.getElementById("load-meals");
  const listMeal = document.getElementById("list");

  btnLoadMeal.addEventListener("click", clickLoadMeals);
  btnAddMeal.addEventListener("click", clickAddMeal);


  async function clickLoadMeals() {

    listMeal.innerHTML = "";

    const response = await fetch(baseUrl);
    const meals = await response.json();

    for (const meal of Object.entries(meals)) {
      const id = meal[0];
      const food = Object.entries(meal[1])[0][1];
      const calories = Object.entries(meal[1])[1][1];
      const time = Object.entries(meal[1])[2][1];

      let divMeal = document.createElement("div");
      divMeal.className = "meal";
      divMeal.id = id;
      let divButtons = document.createElement("div");
      divButtons.className = "meal-buttons";

      let h2 = document.createElement("h2");
      h2.textContent = food;

      let h3Time = document.createElement("h3");
      h3Time.textContent = time;

      let h3Calories = document.createElement("h3");
      h3Calories.textContent = calories;

      let buttonChange = document.createElement("button");
      buttonChange.className = "change-meal";
      buttonChange.textContent = "Change";
      let buttonDelete = document.createElement("button");
      buttonDelete.className = "delete-meal";
      buttonDelete.textContent = "Delete";

      

      divMeal.appendChild(h2);
      divMeal.appendChild(h3Time);
      divMeal.appendChild(h3Calories);
      divMeal.appendChild(divButtons);
      divButtons.appendChild(buttonChange);
      divButtons.appendChild(buttonDelete);
      listMeal.appendChild(divMeal);

      btnEditMeal.disabled = true;
      console.log(id, food, calories, time);
      buttonDelete.addEventListener("click", clickDell)

    }
  }

  async function clickAddMeal() {
    let currentObject = {
      food: foodInput.value,
      calories: caloriesInput.value,
      time: timeInput.value,
    };

    const responsePosted = await fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(currentObject),
    }).then((res) => {
      console.log("Request complete! response:", res);
    });
    foodInput.value = "";
    caloriesInput.value = "";
    timeInput.value = "";

    clickLoadMeals();
  }

  async function clickDell(e) {

    const itemForDell = e.target.parentElement.parentElement;
    console.log(itemForDell.id);
    const responsedell = await fetch(baseUrl+itemForDell.id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(itemForDell),
      });

    clickLoadMeals()
  }

}

slove();
