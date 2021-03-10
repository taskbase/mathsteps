import { removeExponentByOne } from "../../../lib/src/simplifyExpression/basicsSearch/removeExponentByOne";

import { testSimplify } from "./testSimplify.test";

describe("removeExponentByOne", function () {
  testSimplify("x^1", "x", removeExponentByOne);
});
