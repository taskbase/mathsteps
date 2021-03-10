import { reduceZeroDividedByAnything } from "../../../lib/src/simplifyExpression/basicsSearch/reduceZeroDividedByAnything";

import { testSimplifyOperation } from "./testSimplify.test";

describe("simplify basics", function () {
  const tests = [
    ["0/5", "0"],
    ["0/(x+6+7+x^2+2^y)", "0"],
  ];
  tests.forEach((t) =>
    testSimplifyOperation(t[0], t[1], reduceZeroDividedByAnything)
  );
});
