// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar", () => {
    it("Should return a string that is shifted: thinkful => wklqnixo", () => {
        const input = "thinkful";
        const expected = "wklqnixo"
        const actual = caesar(input, 3);
        expect(actual).to.equal(expected);
    })
})
