function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const items = document.querySelectorAll("tbody > tr ");
    const matches = document.getElementById('searchField').value;
    
    for (let i = 0; i < items.length; i++) {
     
      if (items[i].textContent.includes(matches)) {
         document.querySelectorAll("tbody > tr ")[i].classList.add('select');
      }else{
         document.querySelectorAll("tbody > tr ")[i].classList.remove('select');
      }
    }
  }
}
