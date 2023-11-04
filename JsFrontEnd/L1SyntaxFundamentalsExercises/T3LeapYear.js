function leapYear(year){
    let leap = true;
    if(year % 4!=0){
        leap=false;
    }
    if(year % 100==0){
        leap=false;
    }
    if(year % 400==0){
        leap=true;
    }
    if(leap){
        return "yes"
    }else{
        return "no"
    }
}

console.log(leapYear(400));


