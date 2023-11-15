function meetings(meetingsArray) {
    meetingsMap = new Map();
    meetingsArray.forEach(element => {
        let day = element.split(" ")[0];
        let peopleForMeetings = element.split(" ")[1];
        if( !meetingsMap.hasOwnProperty(day)){
            meetingsMap[day] = peopleForMeetings;
            console.log("Scheduled for "+day);
        }else{
            console.log('Conflict on '+day+'!');
        }
    });
    for (const key in meetingsMap) {
        console.log(key+" -> "+meetingsMap[key]);
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)