function roadRadar(speed, area) {
    let flag = false;
    let areaSpeedLimit = 0;
    if (area === "motorway") {
        areaSpeedLimit = 130;
        if (speed <= areaSpeedLimit) {
            flag = true;
        }
    } else if (area === "interstate") {
        areaSpeedLimit = 90;
        if (speed <= areaSpeedLimit) {
            flag = true;
        }
    } else if (area === "city") {
        areaSpeedLimit = 50;
        if (speed <= areaSpeedLimit) {
            flag = true;
        }
    } else if (area === "residential") {
        areaSpeedLimit = 20;
        if (speed <= areaSpeedLimit) {
            flag = true;
        }
    }
    if (flag) {
        return "Driving " + speed + " km/h in a " + areaSpeedLimit + " zone";
    } else {
        let status = "";
        if (speed - areaSpeedLimit <= 20) {
            status = "speeding";
        } else if (speed - areaSpeedLimit <= 40) {
            status = "excessive speeding";
        } else {
            status = "reckless driving";
        }
        return "The speed is " + (speed - areaSpeedLimit) + " km/h faster than the allowed speed of " + areaSpeedLimit + " - "+status;
    }
}

console.log(roadRadar(200,"motorway"));