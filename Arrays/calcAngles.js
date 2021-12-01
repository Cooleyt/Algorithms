// every min is 6 degrees
// every hour is 30 degrees

//clock angles!!!!

//given a number of minutes past midnight, determine
//the angle between the hour and minute hands at that point in time
//keep in mind that on an analog clock, the hour hand is
//not perfectly aligned with the number hour
//e.g. at 4:45, the hour hand is 3/4 the way between 4 and 5

const clockAngles = (minutes) => {
    minuteHand = (minutes % 60) * 6;
    hourHand = (minutes % 720) / 60 * 30;
    if(minuteHand > hourHand){
        return minuteHand - hourHand > 180 ? 360 - (minuteHand - hourHand) : minuteHand - hourHand ;
    }else{
        return hourHand - minuteHand > 180 ? 360 - (hourHand - minuteHand) : hourHand - minuteHand ;
    }
}

// console.log(clockAngles(360));
// console.log(clockAngles(180));
// console.log(clockAngles(210));
// console.log(clockAngles(588));
console.log(clockAngles(555));
// console.log(clockAngles(980));
// console.log(clockAngles(361));