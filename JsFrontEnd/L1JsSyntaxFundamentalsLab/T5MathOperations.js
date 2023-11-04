function calcolate(num1, num2, operator) {
    switch (operator) {
        case '*':
            return num1*num2;
        case '/':
            return num1/num2;
        case '+':
            return num1+num2;
        case '-':
            return num1-num2;
        case '%':
            return num1%num2;
        case '**':
            return num1**num2;
      

        default:
            break;
    }
}

console.log(calcolate(2,4,'**'))