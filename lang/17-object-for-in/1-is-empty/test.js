var assert = require('chai').assert;
var module = require("./is-empty.js");
var isEmpty = module.isEmpty;

describe("isEmpty", function() {
  it("returns true for an empty object", function() {
    assert.isTrue(isEmpty({}));
  });

  it("returns false if a property exists", function() {
    assert.isFalse(isEmpty({
      anything: false
    }));
  });
});
