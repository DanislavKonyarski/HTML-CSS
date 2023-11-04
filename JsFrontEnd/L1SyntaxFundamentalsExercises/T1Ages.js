function ages(age) {
    if(age<0){
        return "out of bounds";
    }else if(age<3){
        return "baby";
    }else if(age<14){
        return "child";
    }else if(age<20){
        return "teenager";
    }else if(age<66){
        return "adult";
    }else{
        return "elder";
    }
    
}
console.log(ages(1));