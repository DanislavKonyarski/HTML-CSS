function revealWords(words, string) {
    let wordsArr = words.split(", ");
    let strArr = string.split(" ");
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].charAt(0) === "*") {
            for (let j = 0; j < wordsArr.length; j++) {
                if (wordsArr[j].length === strArr[i].length) {
                    strArr.splice(i, 1, wordsArr[j]);
                }
            }
        }
    }
    return strArr.join(" ");
}
console.log(revealWords('great, learning','softuni is ***** place for ******** new programming languages'))