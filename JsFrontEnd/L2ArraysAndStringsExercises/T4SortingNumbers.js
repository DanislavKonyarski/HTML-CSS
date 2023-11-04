function sortingNumbers(arr) {
    arr.sort(function (a, b) {
        return a === b ? 0 : a < b ? -1 : 1;
    });
    let printArr = [];
    for (let i = 0; i < arr.length;) {
        printArr.push(arr.shift());
        printArr.push(arr.pop());

    }
    return printArr;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))