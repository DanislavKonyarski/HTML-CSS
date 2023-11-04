function largestNumber(num1, num2, num3) {
    const arr = [num1,num2,num3];
    arr.sort((a,b) => b-a);
    return "The largest number is "+arr[0]+".";
}

console.log(largestNumber(2,9,4))