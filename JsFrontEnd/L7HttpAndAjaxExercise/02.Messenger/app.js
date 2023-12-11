function attachEvents() {
  const textarea = document.getElementById("messages");
  const name = document.querySelectorAll("#controls > div > input")[0];
  const messages = document.querySelectorAll("#controls > div > input")[1];
  const btnSend = document.getElementById("submit");
  const btnRefresh = document.getElementById("refresh");

  btnSend.addEventListener("click", clickSend);
  btnRefresh.addEventListener("click", clickRefresh);

  async function clickSend() {
    const currentObject = {
      author: name.value,
      content: messages.value,
    };

    const post = await fetch("http://localhost:3030/jsonstore/messenger", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(currentObject),
    })
      .then((res) => {
        console.log("Request complete! response:", res);
      })
      .catch((e) => console.log(e));

    name.value = "";
    messages.value = "";
  }

  async function clickRefresh() {
    const response = await fetch("http://localhost:3030/jsonstore/messenger");
    const messagesFromServer = await response.json();

    for (
      let index = 0;
      index < Object.entries(messagesFromServer).length;
      index++
    ) {
      const message = Object.entries(messagesFromServer)[index];
      const author = Object.entries(message[1])[0][1] + ":";
      const currentMessage = Object.entries(message[1])[1][1];
      if (!textarea.value.includes(author + " " + currentMessage)) {
        if (index === Object.entries(messagesFromServer).length - 1) {
          textarea.value += author + " " + currentMessage;
        } else {
          textarea.value += author + " " + currentMessage + "\n";
        }
      }
    }
  }
}

attachEvents();
