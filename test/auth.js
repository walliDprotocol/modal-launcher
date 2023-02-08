var assert = require("assert");
var lib = require("../index");

describe("Auth", function () {
  describe("#Login Fail()", function () {
    it("Should thorw error when login", function () {
      assert.notEqual(lib.auth(1, 1), "aaaaa");
    });
  });
});

describe("Get Config", function () {
  describe("#Get config Fail()", function () {
    it("Should thorw error when login", function () {
      assert.notEqual(lib.getConfig(1, 1), "bbb");
    });
  });
});
