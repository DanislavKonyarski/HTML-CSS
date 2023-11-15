function convertToObject(text) {
    let object = JSON.parse(text);
    let entries = Object.entries(object);
    for (const line of entries) {
        console.log(line[0]+': '+line[1]);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')