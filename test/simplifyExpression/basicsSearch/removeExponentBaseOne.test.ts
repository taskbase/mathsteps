import { removeExponentBaseOne } from "../../../lib/src/simplifyExpression/basicsSearch/removeExponentBaseOne";

import { testSimplifyOperation } from "./testSimplify.test";

describe("removeExponentBaseOne", function () {
  const tests = [
    ["1^3", "1"],
    ["1^x", "1^x"],
    ["1^(2 + 3 + 5/4 + 7 - 6/7)", "1"],
  ];
  tests.forEach((t) => testSimplifyOperation(t[0], t[1], removeExponentBaseOne));
});
