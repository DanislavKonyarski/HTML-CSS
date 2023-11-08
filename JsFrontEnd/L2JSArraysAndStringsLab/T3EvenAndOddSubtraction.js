function evenAndOddSubtraction(arr) {
    let evenNumber = 0;
    let oddNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumber+=arr[i];
        }else{
            oddNumber += arr[i];
        }

    }
    return evenNumber - oddNumber;
}

console.log(evenAndOddSubtraction([1,2,3,4,5,6]))