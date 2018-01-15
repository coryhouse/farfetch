import {
  getCurrencyFormattedNumber,
  isInt,
  scrubFormatting,
  getFormattedNumber
} from "./numberFormat";

describe("Number Formatter", () => {
  describe("getCurrencyFormattedNumber", () => {
    it("returns $5.50 when passed 5.5", () => {
      expect(getCurrencyFormattedNumber(5.5)).toEqual("$5.50");
    });

    it("returns $1.00 when passed 1", () => {
      expect(getCurrencyFormattedNumber(5.5)).toEqual("$1.00");
    });

    it.only("returns $0.50 when passed 0.5", () => {
      expect(getCurrencyFormattedNumber(0.5)).toEqual("$0.50");
    });

    it("returns empty string if passed an empty string", () => {
      expect(getCurrencyFormattedNumber("")).toEqual("");
    });
  });

  describe("isInt", () => {
    it("returns true when passed 0", () => {
      expect(isInt(0)).toEqual(true);
    });

    it("returns false when passed an empty string", () => {
      expect(isInt("")).toEqual(false);
    });

    it("returns true when passed int as a string", () => {
      expect(isInt("5")).toEqual(true);
    });
  });

  describe("scrubFormatting", () => {
    it("strips commas and decimals", () => {
      expect(scrubFormatting("1,234.56")).toEqual("123456");
    });
  });

  describe("getFormattedNumber", () => {
    it("returns 0 if passed 0", () => {
      expect(getFormattedNumber(0)).toEqual(0);
    });

    it("returns empty null if passed empty string", () => {
      expect(getFormattedNumber("")).toEqual(null);
    });
  });
});
