function phoneBook(arr) {
    let phoneBook={};
    arr.forEach(element => {
       phoneBook[element.split(' ')[0]] = element.split(' ')[1]; 
    });

    for (const key in phoneBook) {
        console.log(key+' -> '+phoneBook[key]);
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)