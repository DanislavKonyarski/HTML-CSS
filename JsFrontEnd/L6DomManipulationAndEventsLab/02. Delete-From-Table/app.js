function deleteByEmail() {
  const emails = Array.from(document.querySelectorAll("tbody tr :nth-child(2)"));
  const input = document.querySelector("label input");
  const result = document.getElementById("result");
  

  for (let i = 0; i < emails.length; i++) {
    if (emails[i].textContent === input.value) {
        emails[i].parentElement.parentElement.removeChild(emails[i].parentElement);
        input.value = "";
        result.textContent = "Deleted.";
      } else {
        result.textContent = "Not found.";
      }  
  }
}
