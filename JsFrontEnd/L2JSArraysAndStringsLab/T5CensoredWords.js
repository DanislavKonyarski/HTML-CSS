function censoredWords(str, word){

    while(str.includes(word)){
    str = str.replace(word, "*".repeat(word.length));
}
    return str;
}

console.log(censoredWords('A small sentence with some small', 'small'));