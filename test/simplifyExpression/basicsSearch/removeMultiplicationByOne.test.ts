import { removeMultiplicationByOne } from "../../../lib/src/simplifyExpression/basicsSearch/removeMultiplicationByOne";

import { testSimplifyOperation } from "./testSimplify.test";

describe("removeMultiplicationByOne", function () {
  const tests = [
    ["x*1", "x"],
    ["1x", "x"],
    ["1*z^2", "z^2"],
    ["2*1*z^2", "2 * 1z^2"],
  ];
  tests.forEach((t) => testSimplifyOperation(t[0], t[1], removeMultiplicationByOne));
});
