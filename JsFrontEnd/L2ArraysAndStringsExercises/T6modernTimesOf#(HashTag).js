function modernTimesOfHashTag(str) {
    let currentArr = str.split(" ");
    let print = "";
    for (let i = 0; i < currentArr.length; i++) {
        if (/#[A-Za-z]+/gm.test(currentArr[i])) {
            print += currentArr[i].replace("#","") + "\n";
        }
    }
    return print;
}
console.log(modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia'))