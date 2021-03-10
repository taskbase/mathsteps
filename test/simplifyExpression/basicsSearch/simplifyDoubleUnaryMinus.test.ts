import { simplifyDoubleUnaryMinus } from "../../../lib/src/simplifyExpression/basicsSearch/simplifyDoubleUnaryMinus";

import { testSimplifyOperation } from "./testSimplify.test";

describe("simplifyDoubleUnaryMinus", function () {
  var tests = [
    ["--5", "5"],
    ["--x", "x"],
  ];
  tests.forEach((t) => testSimplifyOperation(t[0], t[1], simplifyDoubleUnaryMinus));
});
