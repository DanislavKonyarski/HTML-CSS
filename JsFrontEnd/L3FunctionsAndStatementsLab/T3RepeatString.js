function repeatString(str, num) {
    let returnStr = "";
    for (let i = 0; i < num; i++) {
        returnStr += str;        
    }
    return returnStr;
}
console.log(repeatString("abc", 3))