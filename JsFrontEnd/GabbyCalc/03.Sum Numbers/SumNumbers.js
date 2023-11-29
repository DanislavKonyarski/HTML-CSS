function calc() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const sign = document.getElementById("sign").value;
  const inputSum = Number(document.getElementById("sum").value);
  let sum = 0;
  if (sign === "+") {
    sum = num1 + num2;
  } else if (sign === "-") {
    sum = num1 - num2;
  }
  if( sum === inputSum){
    document.getElementById("ok").style.display = 'block';
  }else{
    document.getElementById("no").style.display = 'block';
  }
}