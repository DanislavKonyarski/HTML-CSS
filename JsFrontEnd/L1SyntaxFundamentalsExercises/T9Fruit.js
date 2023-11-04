function fruit(typeFruit, grams, price) {
    return "I need $"+(grams/1000*price).toFixed(2)+" to buy "+(grams/1000).toFixed(2)+" kilograms "+typeFruit+".";
}

console.log(fruit('apple', 1563, 2.35))