function solve() {
  let addBtn = document.getElementById('add-btn');
  let placeInput = document.getElementById('place');
  let actionInput = document.getElementById('action');
  let personInput = document.getElementById('person');
  let mainUl = document.getElementById('task-list');
  let createDelete = document.createElement('button');
  let ulPreview = document.getElementById('done-list');
  let createLi = document.createElement('li');

  addBtn.addEventListener('click', addInfo);

  function addInfo() {
      if (placeInput.value === '' || actionInput.value === '' || personInput.value === '') {
          return;
      }

      let li = document.createElement('li');
      li.classList.add('clean-task');

      let divButtons = document.createElement('div');
      divButtons.className = 'buttons';

      let editButton = document.createElement('button');
      editButton.classList.add('edit');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', editData);

      let doneButton = document.createElement('button');
      doneButton.classList.add('done');
      doneButton.textContent = 'Done';
      doneButton.addEventListener('click', postData);

      divButtons.appendChild(editButton);
      divButtons.appendChild(doneButton);

      let articleElement = document.createElement('article');

      let placeP = document.createElement('p');
      placeP.textContent = `Place:${placeInput.value}`;
      let placePValue = placeInput.value;


      let actionP = document.createElement('p');
      actionP.textContent = `Action:${actionInput.value}`;
      let actionPValue = actionInput.value;


      let personP = document.createElement('p');
      personP.textContent = `Person:${personInput.value}`;
      let personPValue = personInput.value;
      articleElement.appendChild(placeP);
      articleElement.appendChild(actionP);
      articleElement.appendChild(personP);
      
      li.appendChild(articleElement);
      li.appendChild(divButtons);
      mainUl.appendChild(li);

      placeInput.value = '';
      actionInput.value = '';
      personInput.value = '';
      // addBtn.disabled = true;

      function editData() {
          placeInput.value = placePValue;
          actionInput.value = actionPValue;
          personInput.value = personPValue;
          mainUl.removeChild(li);
          // addBtn.disabled = false;
      }

      function postData() {
          createDelete.textContent = 'Delete';
          createDelete.className = 'delete';
          createLi.appendChild(articleElement);
          createLi.appendChild(createDelete);
          // articleElement.removeChild(divButtons);
          ulPreview.appendChild(createLi);
      }

      createDelete.addEventListener('click', () => {
          ulPreview.remove()
      });
  }
}