function formatGrade(grade) {

    if(grade<3){
        return "fail ("+grade+")";
    }else if(grade>=5.5){
        return "Excellent ("+grade+")";
    }else if(grade>=4.5){
        return "Very good ("+grade+")";
    }else if(grade>=3.5){
        return "Good ("+grade+")";
    }else if(grade<=3.5){
        return "Poor ("+grade+")";
    }
    
}

console.log(formatGrade(6))