function stringSubstring (word, str){
    let currentArr = str.split(" ");
    for (let i = 0; i < currentArr.length; i++) {
        if(word.toLowerCase()===currentArr[i].toLowerCase()){
            return word;
        }
    }
    return word+" not found!";
}

console.log(stringSubstring('python',
'JavaScript is the best programming language'
))