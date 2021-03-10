import { removeAdditionOfZero } from "../../../lib/src/simplifyExpression/basicsSearch/removeAdditionOfZero";

import { testSimplifyOperation } from "./testSimplify.test";

describe("removeAdditionOfZero", function () {
  var tests = [
    ["2+0+x", "2 + x"],
    ["2+x+0", "2 + x"],
    ["0+2+x", "2 + x"],
  ];
  tests.forEach((t) => testSimplifyOperation(t[0], t[1], removeAdditionOfZero));
});
