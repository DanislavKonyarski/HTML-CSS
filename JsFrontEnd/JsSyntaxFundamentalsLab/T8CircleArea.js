function circleArea (arguments) {

 if (typeof arguments === "number"){
    return parseFloat(arguments*arguments*Math.PI).toFixed(2);
 }else{
    const type = typeof arguments;
    return ("We can not calculate the circle area, because we receive a "+type+".")
 }
}

console.log(circleArea(5));