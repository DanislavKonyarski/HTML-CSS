function arrayRotation(arr, num){
    for (let i = 0; i < num; i++) {
        const currentNum = arr.shift();
        arr.push(currentNum)
    }
    return arr.join(" ")
}

console.log(arrayRotation([32, 21, 61, 1], 4));