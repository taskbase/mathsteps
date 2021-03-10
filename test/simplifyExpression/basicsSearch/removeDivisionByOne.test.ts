import { removeDivisionByOne } from "../../../lib/src/simplifyExpression/basicsSearch/removeDivisionByOne";

import { testSimplifyOperation } from "./testSimplify.test";

describe("removeDivisionByOne", function () {
  testSimplifyOperation("x/1", "x", removeDivisionByOne);
});
