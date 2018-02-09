const expect = require("chai").expect;
const babysitter = require("../src/babysitter");

describe("The babysitter", function() {

    it("gets paid $12 an hour when babysitting before bedtime", function() {
        expect(babysitter("5pm", "7pm", "7pm")).to.equal(24);
    });

    it("gets paid $8 an hour when babysitting between bed time and midnight", function() {
        expect(babysitter("7pm", "7pm", "12am")).to.equal(40);
    });

    it("gets paid $16 an hour when babysitting after midnight", function() {
        expect(babysitter("12am", "12am", "4am")).to.equal(64)
    });

    it("gets paid $12/hour before bedtime, $8/hour between bed and midnight " +
        "and $16/hour after midnight", function(){
        expect(babysitter("5pm", "8pm", "3am")).to.equal(116);
    });

    it("gets paid $12/hour before bedtime, $8/hour between bed and midnight " +
        "and $16/hour after midnight with bed time being before start time", function(){
        expect(babysitter("9pm", "6pm", "4am")).to.equal(88);
    });
});