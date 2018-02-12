const convertTime = (timeString) => {
    let time = timeString.slice(0, -2);

    if((timeString.includes("am") && timeString.includes("12")) || timeString.includes("pm")) {
        return (Number(time) + 12);
    } else if(timeString.includes("am")) {
        return Number(time);
    }
};

const babysitter = (startTime, bedTime, endTime) => {
    let convertedStart = convertTime(startTime);
    let convertedBed = convertTime(bedTime);
    let convertedEnd = convertTime(endTime);

    let firstPay = 12 * (convertedBed - convertedStart);
    let secondPay = 8 * (24 - convertedBed);
    let thirdPay = 16 * (convertedEnd);


    if(convertedStart >= convertedBed) {
        firstPay = 0;
        secondPay = 8 * (24 - convertedStart);
    }

    if(convertedEnd === 24) {
        thirdPay = 0;
    }

    if(convertedBed === convertedEnd) {
        secondPay = 0;
        thirdPay = 0;
    }

    if(convertedStart === 24) {
        firstPay = 0;
        secondPay = 0;
        thirdPay = 16 * (convertedEnd);
    }

    if((convertedBed > convertedEnd && convertedEnd > 12)
        || (convertedBed < convertedEnd && convertedBed <= 12)) {
        firstPay = 12 * (convertedEnd - convertedStart);
        secondPay = 0;
        thirdPay = 0;
    }


    return firstPay + secondPay + thirdPay;
};
module.exports = babysitter;