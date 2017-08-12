var assert = require('chai').assert;
var module = require("./extract-currency.js");
var extractCurrencyValue = module.extractCurrencyValue;

describe("extractCurrencyValue", function() {

  it("for the string $120 returns the number 120", function() {
    assert.strictEqual(extractCurrencyValue('$120'), 120);
  });
  
});
