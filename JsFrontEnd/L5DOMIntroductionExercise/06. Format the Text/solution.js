function solve() {
  const input = document.getElementById('input').value.split(".");
  let count = 0;
  let currentString = "";
  for (let i = 0; i < input.length; i++) {
    if((input.length-1) === i || count ===3){
      let para = document.createElement('p');
      para.textContent = currentString;
      let divForOutput = document.getElementById('output');
      divForOutput.appendChild(para);
       count = 0
      currentString ="";
    }
    count++;
    currentString+=input[i]+".";
    
  }
}