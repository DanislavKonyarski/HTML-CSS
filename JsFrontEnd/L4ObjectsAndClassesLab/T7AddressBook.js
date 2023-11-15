function addressBook(inputArr) {
  let addressBookMap = new Map();
  inputArr.forEach((element) => {
    let name = element.split(":")[0];
    let adress = element.split(":")[1];
    addressBookMap[name] = adress;
  });
  
 let currentArr = Object.entries(addressBookMap).sort();
  
  
  for (const line of currentArr) {
    console.log(line[0] + " -> " + line[1]);
  }
}

addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
);
