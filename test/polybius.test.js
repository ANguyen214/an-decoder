// Write your tests here!
const expect = require("chai").expect;
const {polybius} = require("../src/polybius");

describe("polybius", () => {
    it("Should encode the input and return string of numbers", () => {
        const input = "thinkful";
        const expected = "4432423352125413"
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    });

    it("Should encode input regardless of capital letters and spaces", () => {
        const input = "Hello world";
        const expected = "3251131343 2543241341";
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    });

    it("Should decode the input and return a string", () => {
        const input = "3251131343 2543241341";
        const expected = "hello world";
        const actual = polybius(input, false);
        expect(actual).to.equal(expected);
    });

    it("Should decode the input and return a string. Testing (i/j)", () => {
        const input = "4432423352125413";
        const expected = "th(i/j)nkful";
        const actual = polybius(input, false);
        expect(actual).to.equal(expected);
    });

    it("Should return false when input is a string of numbers and length is odd", () => {
        const input = "44324233521254131";
        const expected = false;
        const actual = polybius(input, false);
        expect(actual).to.equal(false);
    })
});