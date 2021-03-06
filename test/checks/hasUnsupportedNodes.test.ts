import * as math from "mathjs";
import { hasUnsupportedNodes } from "../../lib/src/checks/hasUnsupportedNodes";
import assert = require("assert");

describe("arithmetic stepping", function () {
  it("4 + sqrt(16) no support for sqrt", function () {
    assert.deepEqual(hasUnsupportedNodes(math.parse("4 + sqrt(4)")), true);
  });

  it("x = 5 no support for assignment", function () {
    assert.deepEqual(hasUnsupportedNodes(math.parse("x = 5")), true);
  });

  it("x + (-5)^2 - 8*y/2 is fine", function () {
    assert.deepEqual(
      hasUnsupportedNodes(math.parse("x + (-5)^2 - 8*y/2")),
      false
    );
  });

  it("nthRoot() with no args has no support", function () {
    assert.deepEqual(hasUnsupportedNodes(math.parse("nthRoot()")), true);
  });
});
