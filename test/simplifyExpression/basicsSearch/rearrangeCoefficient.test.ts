import { rearrangeCoefficient } from "../../../lib/src/simplifyExpression/basicsSearch/rearrangeCoefficient";
import { testSimplify } from "./testSimplify.test";

describe("rearrangeCoefficient", function () {
  const tests = [
    ["2 * x^2", "2x^2"],
    ["y^3 * 5", "5y^3"],
  ];
  tests.forEach((t) => testSimplify(t[0], t[1], rearrangeCoefficient));
});
