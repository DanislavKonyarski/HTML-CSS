function reverseAnArrayOfNumbers(count, arr) {
    return arr.slice(0, count).reverse().join(" ");
}

console.log(reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]));