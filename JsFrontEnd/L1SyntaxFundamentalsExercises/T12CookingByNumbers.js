function cookingByNumbers(startNum, com1, com2, com3, com4, com5) {
    let num = parseInt(startNum);
    let arr = [com1, com2, com3, com4, com5]
    let print = "";
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element === "chop") {
            num/=2; 
        } else if (element === "dice") {
            num =Math.sqrt(num); 
        } else if (element === "spice") {
            num+=1;
        } else if (element === "bake") {
           num*=3;
        } else if (element === "fillet") {
            num*=0.8;
        }
        print += num+"\n";
    }
    return print;
}

console.log(cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet'))