function sameNumbers(num) {
    let currentStr = num + "";
    let flag = true;
    let sum = 0;
    for (let i = 0; i < currentStr.length - 1; i++) {
        if (currentStr[i] === currentStr[i + 1]) {
            flag = true;
        } else {
            flag = false;
            break;
        }
    }
    for (let i = 0; i < currentStr.length; i++) {
        sum += parseInt(currentStr[i]);
    }

    return flag + "\n" + sum;
}
console.log(sameNumbers(2222222))