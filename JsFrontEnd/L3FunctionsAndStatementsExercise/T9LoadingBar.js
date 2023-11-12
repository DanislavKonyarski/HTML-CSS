function loadingBar(num) {

    if(num===100){
        return "100% Complete!\n[%%%%%%%%%%]";
    }
    let currentArr = [".",".",".",".",".",".",".",".",".","."];
    for (let i = 0; i < num/10; i++) {
        currentArr.splice(i,1,"%")
    }
    return num+"% ["+currentArr.join("")+"]\nStill loading..."
}

console.log(loadingBar(100));