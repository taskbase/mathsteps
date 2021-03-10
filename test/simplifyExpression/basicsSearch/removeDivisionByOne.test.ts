import { removeDivisionByOne } from "../../../lib/src/simplifyExpression/basicsSearch/removeDivisionByOne";

import { testSimplify } from "./testSimplify.test";

describe("removeDivisionByOne", function () {
  testSimplify("x/1", "x", removeDivisionByOne);
});
