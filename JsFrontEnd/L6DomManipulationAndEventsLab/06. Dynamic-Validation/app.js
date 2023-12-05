function validate() {
  document.getElementById("email").addEventListener("change", function (e) {
    let input = e.currentTarget;
    const regex = new RegExp(/[A-Z,a-z, 0-9]+@\w+\.[a-z]+/gm);
    console.log(e);
    console.log(input);
    if (!regex.test(input.value)) {
      input.classList.add("error");
    }else{
        input.classList.remove("error");
    }
  });
}
