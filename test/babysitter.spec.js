const expect = require("chai").expect;
const babysitter = require("../src/babysitter");

describe("The babysitter", function() {
    it("gets paid $12 an hour when babysitting before bedtime", function() {
        expect(babysitter("5pm", "7pm", "7pm")).to.equal(24);
    });
});