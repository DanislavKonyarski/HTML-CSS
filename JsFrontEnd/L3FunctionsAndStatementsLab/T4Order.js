function orders (products, count) {
    switch (products) {
        case "coffee":
            return (count*1.5).toFixed(2);
        case "water":
            return (count*1).toFixed(2);
        case "coke":
            return (count*1.4).toFixed(2);
        case "snacks":
            return (count*2).toFixed(2);
    }
}

console.log(orders("coffee", 2))