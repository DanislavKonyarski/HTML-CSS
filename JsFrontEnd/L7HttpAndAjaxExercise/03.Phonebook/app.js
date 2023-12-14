function attachEvents() {
  const baseUrl = "http://localhost:3030/jsonstore/phonebook/";

  const phoneBook = document.getElementById("phonebook");
  const person = document.getElementById("person");
  const phone = document.getElementById("phone");
  const btnCreate = document.getElementById("btnCreate");
  const btnLoad = document.getElementById("btnLoad");

  btnLoad.addEventListener("click", clickLoad);
  btnCreate.addEventListener("click", clickCreate);

  async function clickLoad() {
    phoneBook.textContent = "";
    const response = await fetch(baseUrl);
    const phone = await response.json();

    for (const iterator of Object.entries(phone)) {
      const li = document.createElement("li");
      const btnDel = document.createElement("button");
      btnDel.id = `btnDelete ${iterator[0]}`;
      btnDel.textContent = "Delete";
      li.id = iterator[0];
      const entri = Object.entries(iterator[1]);
      const name = entri[0][1];
      const phoneNumber = entri[1][1];
      li.textContent = `${name}: ${phoneNumber}`;

      phoneBook.appendChild(li);
      li.appendChild(btnDel);
      btnDel.addEventListener("click", () => {
        fetch(baseUrl + iterator[0], {
          method: "DELETE",
        });

        li.remove();
      });
    }
  }

  async function clickCreate() {
    const postObject = {
      person: person.value,
      phone: phone.value,
    };

    const post = await fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postObject),
    });

    clickLoad();

    person.value = "";
    phone.value = "";
  }
}

attachEvents();
