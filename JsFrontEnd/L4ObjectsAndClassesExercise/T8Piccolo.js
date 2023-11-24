function piccolo(inputCarsArr) {
    
    let carsInParkinng = [];

    for (let i = 0; i < inputCarsArr.length; i++) {
        let command = inputCarsArr[i].split(`, `)[0];
        let car = inputCarsArr[i].split(', ')[1];
        if(command === 'IN' && !carsInParkinng.includes(car)){
            carsInParkinng.push(car);
        }else if(command === 'OUT' && carsInParkinng.includes(car)){
           let currentIndex = carsInParkinng.indexOf(car);
           carsInParkinng.splice(currentIndex,1);
        }
    }

    carsInParkinng = carsInParkinng.sort((a,b) => 
    a.localeCompare(b));
    // a.match(/[0-9]+/gm) - b.match(/[0-9]+/gm));
    if (carsInParkinng.length!==0) {
        console.log(carsInParkinng.join('\n'));
    }else{
        console.log('Parking Lot is Empty');
    }
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']

)