function generateReport() {
    
  const check = document.querySelectorAll("thead tr th input");
  const information = document.querySelectorAll("tbody tr");
  let informationForOutputArr = [];

  let currentIndexArr = [];
  for (let i = 0; i < check.length; i++) {
    if (check[i].checked) {
      currentIndexArr.push(i);
    }
  }

  for (let i = 0; i < information.length; i++) {
    const currentElements = Array.from(information[i].children);
    let currentObject = {};
    currentIndexArr.forEach((e) => {
      const key = document
        .querySelectorAll("thead tr th")
        [e].textContent.trim()
        .toLowerCase();
      const value = currentElements[e].textContent;
      currentObject[key] = value;
    });
    informationForOutputArr.push(currentObject);
  }

  let output = JSON.stringify(informationForOutputArr);
  document.getElementById("output").value = output;

}
