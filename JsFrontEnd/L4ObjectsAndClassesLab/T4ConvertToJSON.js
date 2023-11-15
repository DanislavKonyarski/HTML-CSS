function convertToJSON(firstName, lastName, hairColor) {
    let person = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    };
    const jsonString = JSON.stringify(person);
    console.log(jsonString);
}

convertToJSON('George', 'Jones', 'Brown')