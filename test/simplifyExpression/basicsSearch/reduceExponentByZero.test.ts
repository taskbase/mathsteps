import { reduceExponentByZero } from "../../../lib/src/simplifyExpression/basicsSearch/reduceExponentByZero";
import { testSimplifyOperation } from "./testSimplify.test";

describe("reduceExponentByZero", function () {
  testSimplifyOperation("(x+3)^0", "1", reduceExponentByZero);
});
