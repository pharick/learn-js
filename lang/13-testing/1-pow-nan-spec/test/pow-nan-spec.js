var assert = require("assert");
var module = require("../pow-nan-spec.js");
var pow = module.pow;

describe("pow", function() {
  describe("Возводит x в степень n", function() {

    function makeTest(x) {
      var expected = x * x * x;
      it("При возведении " + x + " в степень 3 результат: " + expected, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (var x = 1; x <=5; x++) {
      makeTest(x);
    }
  });

  describe("При x в степени 0 возвращает 1", function() {

    function makeTest(x) {
      it("При возведении " + x + " в степень 0 результат: 1", function() {
        assert.equal(pow(x, 0), 1);
      });
    }

    for (var x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });

  it("При возведении в отрицательную степень результат NaN", function() {
    assert(isNaN(pow(2, -1)), "pow(2, -1) не NaN");
  });

  it("При возведении в дробную степень результат NaN", function() {
    assert(isNaN(pow(2, 1.5)), "pow(2, 1.5) не NaN");
  });

  it("При возведении 0 в степень 0 результат NaN", function() {
    assert(isNaN(pow(0, 0)), "pow(0, 0) не NaN");
  });
});
