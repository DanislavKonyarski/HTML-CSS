function passwordValidator(password) {
  let returnStr = "";
  if (password.length < 6 || password.length > 10) {
    returnStr += "Password must be between 6 and 10 characters\n";
  }
  if (password.split(/[A-Z,a-z,0-9]+/gm).join("") != "") {
    returnStr += "Password must consist only of letters and digits\n"
  }
  if(password.split(/\D+/gm).join("").length < 2){
    returnStr += "Password must have at least 2 digits\n";
  }
  if ( returnStr.length == 0){
    returnStr = "Password is valid";
  }
  return returnStr.trim();
}

console.log(passwordValidator("logIn"));
console.log(passwordValidator("MyPass123"));
console.log(passwordValidator("Pa$s$s"));
