function create(words) {
   const content = document.getElementById("content");
   for (let i = 0; i < words.length; i++) {
      const text = words[i];
      const div = document.createElement("div");
      const p = document.createElement("p");
      content.appendChild(div).appendChild(p).textContent = text;
      p.style.display = "none";
      div.addEventListener("click", clickOn);
   }

   function clickOn(e){
      e.currentTarget.querySelector("p").style.display = "block";
   }
}