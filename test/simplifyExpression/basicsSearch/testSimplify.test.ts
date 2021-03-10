import assert = require("assert");
import { printAscii } from "../../../lib/src/util/print";
import { TestUtil } from "../../TestUtil";
import * as math from 'mathjs';
import {simplify} from '../../../lib/src/simplifyExpression/simplify';

export function testSimplifyOperation(exprStr, outputStr, simplifyOperation) {
  it(exprStr + " -> " + outputStr, function () {
    const inputNode = TestUtil.parseAndFlatten(exprStr);
    const newNode = simplifyOperation(inputNode).newNode;
    assert.equal(printAscii(newNode), outputStr);
  });
}

export function testSimplify(
  inputString: string,
  expectedOutputString: string,
  debug = false
) {
  it(inputString + " -> " + expectedOutputString, () => {
    const parsed = math.parse(inputString);
    const simplified = simplify(parsed, debug)
    const printed = printAscii(simplified);
    if (debug) {
      console.log('parsed', parsed, JSON.stringify(parsed));
      console.log('printed', printed);
    }
    assert.deepEqual(
      printed,
      expectedOutputString
    );
  });
}
