function solve(input) {
    let countOfBarist = Number(input.shift());
    let baristasArr = {};

    for (let i = 0; i < countOfBarist; i++) {
        let [name, shift, coffee] = input.shift().split(' ');
        coffee = coffee.split(',');

        baristasArr[name] = {
            shift,
            coffee
        };
    }

    let infoForPrint = [];

    for (const line of input) {
        if (line === 'Closed') {
            break;
        }

        let [command, name, ...args] = line.split(' / ');

        if (command === 'Prepare') {
            let [shift, coffeeType] = args;
            if (baristasArr[name].shift === shift && baristasArr[name].coffee.includes(coffeeType)) {
                infoForPrint.push(`${name} has prepared a ${coffeeType} for you!`);
            } else {
                infoForPrint.push(`${name} is not available to prepare a ${coffeeType}.`);
            }
        } else if (command === 'Change Shift') {
            let [newShift] = args;
            baristasArr[name].shift = newShift;
            infoForPrint.push(`${name} has updated his shift to: ${newShift}`);
        } else if (command === 'Learn') {
            let [newCoffeeType] = args;
            if (baristasArr[name].coffee.includes(newCoffeeType)) {
                infoForPrint.push(`${name} knows how to make ${newCoffeeType}.`);
            } else {
                baristasArr[name].coffee.push(newCoffeeType);
                infoForPrint.push(`${name} has learned a new coffee type: ${newCoffeeType}.`);
            }
        }
    }

    let baristasInfo = Object.entries(baristasArr).map(([name, info]) => {
        return `Barista: ${name}, Shift: ${info.shift}, Drinks: ${info.coffee.join(', ')}`;
    });

    console.log(infoForPrint.join('\n'));
    console.log(baristasInfo.join('\n'));
}
