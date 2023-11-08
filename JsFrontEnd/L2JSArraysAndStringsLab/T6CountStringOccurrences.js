function countStringOccurrences(text, word) {
    let currentArr = text.split(" ");
    let count = 0;
    for (let index = 0; index < currentArr.length; index++) {
        if (currentArr[index]===word) {
            count++;
        }
    }
    return count;
}

console.log(countStringOccurrences('This is a word and it also is a sentence',
    'is'
    ));