import { removeExponentByOne } from "../../../lib/src/simplifyExpression/basicsSearch/removeExponentByOne";

import { testSimplifyOperation } from "./testSimplify.test";

describe("removeExponentByOne", function () {
  testSimplifyOperation("x^1", "x", removeExponentByOne);
});
