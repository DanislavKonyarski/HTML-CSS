function printEveryNthElementFromAnArray(arr, num) {
    let printArr = [];
    for (let i = 0; i < arr.length; i += num) {
        printArr.push(arr[i])

    }
    return printArr;
}
console.log(printEveryNthElementFromAnArray(['5', '20', '31', '4', '20'], 2))