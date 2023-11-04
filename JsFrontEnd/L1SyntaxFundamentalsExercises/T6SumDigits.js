function sumDigits(num) {
    let curentString = num+""
    let result = 0;
    for (let i = 0; i < curentString.length; i++) {
        result+=parseInt(curentString[i]); 
        
    }
    return result;
}

console.log(sumDigits(97561))