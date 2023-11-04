function theatrePromotions(dayli, age) {
    if (age >= 0 && age <= 18) {
        if (dayli === "Weekday") {
            return "12$";
        } else if (dayli === "Weekend") {
            return "15$";
        } else if (dayli === "Holiday") {
            return "5$";
        }
    } else if (age > 18 && age <= 64) {
        if (dayli === "Weekday") {
            return "18$";
        } else if (dayli === "Weekend") {
            return "20$";
        } else if (dayli === "Holiday") {
            return "12$";
        }
    } else if (age > 64 && age <= 122) {
        if (dayli === "Weekday") {
            return "12$";
        } else if (dayli === "Weekend") {
            return "15$";
        } else if (dayli === "Holiday") {
            return "10$";
        }
    } else
        return "Error!";
}
console.log(theatrePromotions('Weekday', 42))
console.log(theatrePromotions('Holiday', -12))
console.log(theatrePromotions('Holiday', 15))