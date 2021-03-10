import {resolvesToConstant} from './resolvesToConstant';
import {NodeType} from '../node/NodeType';

export function hasUnsupportedNodes(node, debug = false): boolean {
  if (NodeType.isParenthesis(node)) {
    return hasUnsupportedNodes(node.content);
  } else if (NodeType.isUnaryMinus(node)) {
    return hasUnsupportedNodes(node.args[0]);
  } else if (NodeType.isOperator(node)) {
    return node.args.some(hasUnsupportedNodes);
  } else if (NodeType.isSymbol(node) || NodeType.isConstant(node)) {
    return false;
  } else if (NodeType.isFunction(node, 'abs')) {
    if (node.args.length !== 1) {
      return isUnsupported(node, debug)
    }
    if (node.args.some(hasUnsupportedNodes)) {
      return isUnsupported(node, debug)
    }
    return !resolvesToConstant(node.args[0]);
  } else if (NodeType.isFunction(node, 'nthRoot')) {
    return node.args.some(hasUnsupportedNodes) || node.args.length < 1;
  } else if (NodeType.isFunction(node, 'fraction')) {

    return isUnsupported(node, debug);

    // TODO: would be nice if we had support for fractions like this as well
    // return node.args.some(hasUnsupportedNodes) || node.args.length < 1;
  } else {
    return isUnsupported(node, debug)
  }
}

function isUnsupported(node, debug): boolean {
  if (debug) {
    console.error('UNSUPPORTED_NODE');
    console.error(`node:`, node);
    console.error(`node.type:`, node.type);
  }
  return true;
}
