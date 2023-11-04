function reversedChars(char1,char2,char3) {
    const arr = [char1, char2, char3];
    return arr.reverse().join("");
}
console.log(reversedChars('a','s','d'));