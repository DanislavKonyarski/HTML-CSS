function Vacation(people, typeGroup, daily) {
    let price = 0;
    if (typeGroup === "Students") {
        if (daily === "Friday") {
            price = 8.45;
        } else if (daily === "Saturday") {
            price = 9.8;
        } else if (daily === "Sunday") {
            price = 10.46;
        }
        if (people >= 30) {
            return "Total price: " + (people * price * 0.85).toFixed(2);
        } else {
            return "Total price: " + (people * price).toFixed(2);
        }
    } else if (typeGroup === "Business") {
        if (daily === "Friday") {
            price = 10.90;
        } else if (daily === "Saturday") {
            price = 15.60;
        } else if (daily === "Sunday") {
            price = 16;
        }
        if (people >= 100) {
            return "Total price: " + ((people * price) - (price * 10)).toFixed(2);
        } else {
            return "Total price: " + (people * price).toFixed(2);
        }
    } else {
        if (daily === "Friday") {
            price = 15;
        } else if (daily === "Saturday") {
            price = 20;
        } else if (daily === "Sunday") {
            price = 22.50;
        }
        if (people >= 10 && people <= 20) {
            return "Total price: " + (people * price * 0.95).toFixed(2);
        } else {
            return "Total price: " + (people * price).toFixed(2);
        }
    }
}


console.log(Vacation(9, "Regular", "Friday"))
console.log(Vacation(10, "Regular", "Saturday"))
console.log(Vacation(20, "Regular", "Sunday"))