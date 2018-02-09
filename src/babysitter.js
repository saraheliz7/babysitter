const convertTime = (timeString) => {
    let time = timeString.slice(0, -2);

    if(timeString.includes("am") && timeString.includes("12")) {
        return (Number(time) + 12) * 100;
    } else if(timeString.includes("am")) {
        return Number(time) * 100;
    } else if(timeString.includes("pm")) {
        return (Number(time) + 12) * 100;
    }
};

const babysitter = (startTime, bedTime, endTime) => {
    let convertedStart = convertTime(startTime);
    let convertedBed = convertTime(bedTime);
    let convertedEnd = convertTime(endTime);

    let firstPay = 12 * ((convertedBed - convertedStart) / 100);
    let secondPay = 8 * ((2400 - convertedBed)/ 100);
    let thirdPay = 16 * (convertedEnd / 100);

    if(convertedStart >= convertedBed) {
        firstPay = 0;
        secondPay = 8 * ((2400 - convertedStart) / 100);
    }

    if(convertedEnd === 2400) {
        thirdPay = 0;
    }

    if(convertedBed === convertedEnd) {
        secondPay = 0;
        thirdPay = 0;
    }

    if(convertedStart === 2400) {
        firstPay = 0;
        secondPay = 0;
        thirdPay = 16 * (convertedEnd / 100);
    }




    return firstPay + secondPay + thirdPay;
};
module.exports = babysitter;