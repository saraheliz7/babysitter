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
});