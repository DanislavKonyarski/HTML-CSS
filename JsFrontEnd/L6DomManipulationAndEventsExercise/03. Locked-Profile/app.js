function lockedProfile() {
  const buttons = document.querySelectorAll("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", onClick);
  }

  function onClick(e) {
    const isRadioButtonUnlockClick =
      !e.currentTarget.parentElement.querySelector("input").checked;
    const element =
      e.currentTarget.parentElement.getElementsByTagName("div")[0];
    const button = e.currentTarget;

    if (isRadioButtonUnlockClick) {
      if (button.textContent === "Show more") {
        element.style.display = "block";
        button.textContent = "Hide it";
      } else {
        element.style.display = "none";
        button.textContent = "Show more";
      }
    }
  }
}
