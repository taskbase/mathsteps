import { reduceMultiplicationByZero } from "../../../lib/src/simplifyExpression/basicsSearch/reduceMultiplicationByZero";

import { testSimplifyOperation } from "./testSimplify.test";

describe("reduce multiplication by 0", function () {
  const tests = [
    ["0x", "0"],
    ["2*0*z^2", "0"],
  ];
  tests.forEach((t) => testSimplifyOperation(t[0], t[1], reduceMultiplicationByZero));
});
