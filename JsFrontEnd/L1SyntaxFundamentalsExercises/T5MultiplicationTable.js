function multiplicationTable(num) {
    let print = "";
    for (let i = 1; i <= 10; i++) {
        print+= num+" X "+i+" = "+num*i+"\n";
    }
    return print;
}
console.log(multiplicationTable(5));