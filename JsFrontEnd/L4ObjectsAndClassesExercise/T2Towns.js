function towns(arr) {
    let townsArr = [];
    for (let i = 0; i < arr.length; i++) {
        let town = arr[i].split(' | ')[0];
        let latitude = Number(arr[i].split(' | ')[1]).toFixed(2);
        let longitude = Number(arr[i].split(' | ')[2]).toFixed(2);
        let towns ={
            town: town,
            latitude: latitude,
            longitude: longitude  
        }
        townsArr.push(towns);
    }
    townsArr.forEach(element => {
        console.log(element);
    });
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);
