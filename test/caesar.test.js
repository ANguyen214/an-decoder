// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar", () => {
    it("Should return a string that is shifted: thinkful => wklqnixo", () => {
        const input = "thinkful";
        const expected = "wklqnixo"
        const actual = caesar(input, 3);
        expect(actual).to.equal(expected);
    });

    it("Should return a string that is shifted to the left: thinkful => qefkhcri", () => {
        const input = "thinkful";
        const expected = "qefkhcri";
        const actual = caesar(input, -3);
        expect(actual).to.equal(expected);
    });

    it("Should return encoded message: This is a secret message! => bpqa qa i amkzmb umaaiom!",
        () => {
        const input = "This is a secret message!";
        const expected = "bpqa qa i amkzmb umaaiom!"
        const acutal = caesar(input, 8);
        expect(actual).to.equal(expected);            
        });

    it("Should return a decoded message: BPQA qa I amkzmb umaaiom! => this is a secret message!",
        () => {
        const input = "BPQA qa I amkzmb umaaiom!";
        const expected = "this is a secret message!";
        const actual = caesar(input, 8, false);
        expect(actual).to.equal(expected);
        });    
});
