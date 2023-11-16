function employees(arr) {
  let person = {};
  for (let i = 0; i < arr.length; i++) {
    person[arr[i]] = arr[i].length;
  }
  for (const key in person) {
    console.log('Name: ' + key+ " -- Personal Number: "+person[key]);
        
    
  }
}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
