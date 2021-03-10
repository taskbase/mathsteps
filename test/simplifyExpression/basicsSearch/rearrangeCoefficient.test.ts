import { rearrangeCoefficient } from "../../../lib/src/simplifyExpression/basicsSearch/rearrangeCoefficient";
import { testSimplifyOperation } from "./testSimplify.test";

describe("rearrangeCoefficient", function () {
  const tests = [
    ["2 * x^2", "2x^2"],
    ["y^3 * 5", "5y^3"],
  ];
  tests.forEach((t) => testSimplifyOperation(t[0], t[1], rearrangeCoefficient));
});
