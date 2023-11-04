function printAndSum (num1, num2) {
    let print = "";
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        print += i+" " ;
        sum += i;
    }
    return print+"\nSum: "+sum;
}

console.log(printAndSum( 5, 10))