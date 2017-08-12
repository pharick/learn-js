var assert = require("assert");
var module = require("./get-decimal.js");
var getDecimal = module.getDecimal;

describe("getDecimal", function() {
  it("Возвращает дробную часть 1.2 как 0.2", function() {
    assert.equal(getDecimal(1.2), 0.2);
  });

  it("Возвращает дробную часть 1.3 как 0.3", function() {
    assert.equal(getDecimal(1.3), 0.3);
  });

  it("Возвращает дробную часть 12.345 как 0.345", function() {
    assert.equal(getDecimal(12.345), 0.345);
  });

  it("Возвращает дробную часть -1.2 как 0.2", function() {
    assert.equal(getDecimal(-1.2), 0.2);
  });

  it("Возвращает дробную часть 5 как 0", function() {
    assert.equal(getDecimal(5), 0);
  });
});
