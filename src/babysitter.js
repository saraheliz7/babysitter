const convertTo24Hour = (timeString) => {
    let time = timeString.slice(0, -2);

    if((timeString.includes("am") && timeString.includes("12")) || timeString.includes("pm")) {
        return (Number(time) + 12);
    } else if(timeString.includes("am")) {
        return Number(time);
    }
};

const calculateBabysitterPay = (startTime, bedTime, endTime) => {
    let convertedStartTime = convertTo24Hour(startTime);
    let convertedBedTime = convertTo24Hour(bedTime);
    let convertedEndTime = convertTo24Hour(endTime);

    let beforeBedPay = 0;
    let betweenBedAndMidnightPay = 0;
    let afterMidnightPay = 0;

    if(convertedStartTime > convertedBedTime) {
        betweenBedAndMidnightPay = 8 * (24 - convertedStartTime);
        afterMidnightPay = 16 * convertedEndTime;
    } else if(convertedEndTime === 24) {
        beforeBedPay = 12 * (convertedBedTime - convertedStartTime);
        betweenBedAndMidnightPay = 8 *(24 - convertedBedTime);
    } else if(convertedBedTime === convertedEndTime) {
        beforeBedPay = 12 * (convertedBedTime - convertedStartTime);
    } else if(convertedStartTime === 24) {
        afterMidnightPay = 16 * (convertedEndTime);
    } else {
        beforeBedPay = 12 * (convertedBedTime - convertedStartTime);
        betweenBedAndMidnightPay = 8 * (24 - convertedBedTime);
        afterMidnightPay = 16 * (convertedEndTime);
    }

    if((convertedBedTime > convertedEndTime && convertedEndTime > 12)
        || (convertedBedTime < convertedEndTime && convertedBedTime <= 12)) {
        beforeBedPay = 12 * (convertedEndTime - convertedStartTime);
        betweenBedAndMidnightPay = 0;
        afterMidnightPay = 0;
    } else if(convertedBedTime > convertedEndTime && convertedEndTime < 12 && convertedBedTime < 12) {
        beforeBedPay = 12 * (24 - convertedStartTime);
        betweenBedAndMidnightPay = 0;
    }

    return beforeBedPay + betweenBedAndMidnightPay + afterMidnightPay;
};

module.exports = calculateBabysitterPay;