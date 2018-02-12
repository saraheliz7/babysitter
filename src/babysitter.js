const convertTo24Hour = (timeString) => {
    let time = timeString.slice(0, -2);

    if((timeString.includes("am") && timeString.includes("12")) || timeString.includes("pm")) {
        return (Number(time) + 12);
    } else if(timeString.includes("am")) {
        return Number(time);
    }
};

const calculateBabysitterPay = (startTime, bedTime, endTime) => {
    let convertedStart = convertTo24Hour(startTime);
    let convertedBed = convertTo24Hour(bedTime);
    let convertedEnd = convertTo24Hour(endTime);

    let beforeBedPay = 12 * (convertedBed - convertedStart);
    let betweenBedAndMidnightPay = 8 * (24 - convertedBed);
    let afterMidnightPay = 16 * (convertedEnd);


    if(convertedStart >= convertedBed) {
        beforeBedPay = 0;
        betweenBedAndMidnightPay = 8 * (24 - convertedStart);
    }

    if(convertedEnd === 24) {
        afterMidnightPay = 0;
    }

    if(convertedBed === convertedEnd) {
        betweenBedAndMidnightPay = 0;
        afterMidnightPay = 0;
    }

    if(convertedStart === 24) {
        beforeBedPay = 0;
        betweenBedAndMidnightPay = 0;
        afterMidnightPay = 16 * (convertedEnd);
    }

    if((convertedBed > convertedEnd && convertedEnd > 12)
        || (convertedBed < convertedEnd && convertedBed <= 12)) {
        beforeBedPay = 12 * (convertedEnd - convertedStart);
        betweenBedAndMidnightPay = 0;
        afterMidnightPay = 0;
    } else if(convertedBed > convertedEnd && convertedEnd < 12 && convertedBed < 12) {
        beforeBedPay = 12 * (24 - convertedStart);
        betweenBedAndMidnightPay = 0;
    }

    return beforeBedPay + betweenBedAndMidnightPay + afterMidnightPay;
};
module.exports = calculateBabysitterPay;