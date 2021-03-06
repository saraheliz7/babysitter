const expect = require("chai").expect;
const calculateBabysitterPay = require("../src/babysitter");

describe("The babysitter", function() {

    it("gets paid $12 an hour when babysitting before bedtime", function() {
        expect(calculateBabysitterPay("5pm", "7pm", "7pm")).to.equal(24);
    });

    it("gets paid $8 an hour when babysitting between bed time and midnight", function() {
        expect(calculateBabysitterPay("7pm", "7pm", "12am")).to.equal(40);
    });

    it("gets paid $16 an hour when babysitting after midnight", function() {
        expect(calculateBabysitterPay("12am", "12am", "4am")).to.equal(64)
    });

    it("gets paid $12/hour before bedtime, $8/hour between bed and midnight " +
        "and $16/hour after midnight", function(){
        expect(calculateBabysitterPay("5pm", "8pm", "3am")).to.equal(116);
    });

    it("gets paid $12/hour before bedtime, $8/hour between bed and midnight " +
        "and $16/hour after midnight with bed time being before start time", function(){
        expect(calculateBabysitterPay("9pm", "6pm", "4am")).to.equal(88);
    });

    it("gets paid $12/hour before bedtime and end time when the bed time is later than end time", function(){
        expect(calculateBabysitterPay("5pm", "9pm", "8pm")).to.equal(36);
    });

    it("gets paid $12/hour before bedtime and end time when the bed time is later than end time", function(){
        expect(calculateBabysitterPay("9pm", "3am", "11pm")).to.equal(24);
    });

    it("gets paid $12/hour before bedtime and $16 an hour after midnight when the bed time is later " +
        "than end time", function(){
        expect(calculateBabysitterPay("9pm", "3am", "1am")).to.equal(52);
    });

});