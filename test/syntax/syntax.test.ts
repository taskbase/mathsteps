import {testSimplify} from '../simplifyExpression/basicsSearch/testSimplify.test';

describe("test understanding of syntax", () => {
  const tests = [
    // ["fraction(1,2)+fraction(1,2)", "1"], not working yet
    ["1/2+1/2", "1"],
  ];
  tests.forEach((t) => testSimplify(t[0], t[1]));
});
