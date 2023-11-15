function personInfo(firstName, lastName, age) {
    let age1 = Number(age);
    let person = {
    firstName,
    lastName,
    age: age1,
  };
  return person;
}

console.log(personInfo("Peter","Pan","20"));
