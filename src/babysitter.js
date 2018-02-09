const convertTime = (timeString) => {
    let time = timeString.slice(0, -2);

    if(timeString.includes("am")) {
        return Number(time) + 100;
    } else if(timeString.includes("pm")) {
        return (Number(time) + 12) * 100;
    }
};



const babysitter = (startTime, bedTime, endTime) => {
    let convertedStart = convertTime(startTime);
    let convertedBed = convertTime(bedTime);
    let convertedEnd = convertTime(endTime);

    let startPay = ((convertedBed - convertedStart) / 100) * 12;
    let bedPay = 0;
    let endPay = 0;
    let finalPay = startPay + bedPay + endPay;



return finalPay;
};
module.exports = babysitter;