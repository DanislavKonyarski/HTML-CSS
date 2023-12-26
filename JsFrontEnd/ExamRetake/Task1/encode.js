const { log } = require("console");

function encode(input) {
  let code = input[0];

  for (let i = 1; i < input.length; i++) {
    let command = input[i];
    // console.log(command);
    if (command === "Buy") {
      console.log(`The cryptocurrency is: ${code}`);
    } else if (command === "TakeEven") {
      let currentCode = "";
      for (let j = 0; j < code.length; j += 2) {
        currentCode += code.split("")[j];
      }
      code = currentCode;
      console.log(code);
    } else if (command.split("?")[0] === "ChangeAll") {
      let strForReplace = command.split("?")[1];
      let withReplace = command.split("?")[2];
    //   code = code.replaceAll(strForReplace, withReplace);
    while(code.includes(strForReplace)){
        code = code.replace(strForReplace,withReplace);
    }
      console.log(code);
    } else if (command.split("?")[0] === "Reverse") {
      let strForSearch = command.split("?")[1];
      let currentArr = code.split(strForSearch);
      if (currentArr.length === 1) {
        console.log("error");
      } else {
        code = code.replace(strForSearch, "");
        code += strForSearch.split("").reverse().join("");
        console.log(code);
      }
    }
  }
}

encode([
    "z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",
    "TakeEven",
    "Reverse?!nzahc",
    "ChangeAll?m?g",
    "Reverse?adshk",
    "ChangeAll?z?i",
    "Buy",
]);
