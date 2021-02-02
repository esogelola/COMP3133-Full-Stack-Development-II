var assert = require("chai").assert;
var calc = require("../app/calculator");

describe("Calculator", () => {
  describe("Calculator Test Cases", () => {
    it("add(5,2) expected result 7", (done) => {
      assert.equal(calc.add(5, 2), 7);

      done();
    });
    it("add(5,2) expected result 8", (done) => {
      assert.equal(calc.add(5, 2), 8);

      done();
    });
    it("sub(5,2) expected result 3", (done) => {
      assert.equal(calc.sub(5, 2), 3);

      done();
    });
    it("sub(5,2) expected result 5", (done) => {
      assert.equal(calc.sub(5, 2), 5);

      done();
    });
    it("mul(5,2) expected result 10", (done) => {
      assert.equal(calc.mul(5, 2), 10);

      done();
    });
    it("mul(5,2) expected result 12", (done) => {
      assert.equal(calc.mul(5, 2), 12);

      done();
    });
    it("div(10,2) expected result 5", (done) => {
      assert.equal(calc.div(10, 2), 5);

      done();
    });
    it("div(10,2) expected result 2", (done) => {
      assert.equal(calc.div(10, 2), 2);

      done();
    });
  });
});
