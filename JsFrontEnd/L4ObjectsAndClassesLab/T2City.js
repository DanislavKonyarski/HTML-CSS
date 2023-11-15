function city (city) {
    let entry = Object.entries(city);
    for (const line of entry) {
        console.log(line[0]+' -> '+line[1]);
    }
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)