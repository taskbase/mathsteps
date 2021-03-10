import { removeMultiplicationByNegativeOne } from "../../../lib/src/simplifyExpression/basicsSearch/removeMultiplicationByNegativeOne";

import { testSimplifyOperation } from "./testSimplify.test";

describe("removeMultiplicationByNegativeOne", function () {
  const tests = [
    ["-1*x", "-x"],
    ["x^2*-1", "-x^2"],
    ["2x*2*-1", "2x * 2 * -1"], // does not remove multiplication by -1
  ];
  tests.forEach((t) =>
    testSimplifyOperation(t[0], t[1], removeMultiplicationByNegativeOne)
  );
});
