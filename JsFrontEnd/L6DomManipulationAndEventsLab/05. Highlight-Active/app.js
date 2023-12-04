function focused() {
  const allElement = document.querySelectorAll("div div input");
  for (let i = 0; i < allElement.length; i++) {
    allElement[i].addEventListener("focus", focus);
    allElement[i].addEventListener("blur", notFocus);
    function focus() {
      allElement[i].parentElement.classList.add("focused");
    }
    function notFocus() {
        allElement[i].parentElement.classList.remove("focused");
    }
  }
}
