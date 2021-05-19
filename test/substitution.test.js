// Write your tests here!
const expect = require("chai").expect;
const {substitution} = require("../src/substitution");

describe("substitution", () => {
    it("Should take in a string and encode it: thinkful => jrufscpw", () => {
        const input = "thinkful";
        const expected = "jrufscpw";
        const actual = substitution(input, "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });

    it("Testing with special characters: message => y&ii$r&", () => {
        const input = "message";
        const expected = "y&ii$r&";
        const actual = substitution(input, "$wae&zrdxtfcygvuhbijnokmpl");
        expect(actual).to.equal(expected);
    });

    it("Testing with special characters: y&ii$r& => message", () => {
        const input = "y&ii$r&";
        const expected = "message";
        const actual = substitution(input, "$wae&zrdxtfcygvuhbijnokmpl", false);
        expect(actual).to.equal(expected);
    });

    it("Testing for a false result with a short alphabet input", () => {
        const input = "thinkful";
        const expected = false;
        const actual = substitution(input, "short");
        expect(actual).to.equal(expected);
    });

    it("Testing for a false result with an alphabet input that's too long", () => {
        const input = "thinkful";
        const expected = false;
        const actual = substitution(input, "short");
        expect(actual).to.equal(expected);
    });
});