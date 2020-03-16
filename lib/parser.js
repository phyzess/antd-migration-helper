'use strict';

const { parse } = require('@babel/parser')

module.exports = function parser(content) {
  return parse(content, {
    sourceType: 'module',
    plugins: [
      'jsx',
      'asyncFunctions',
      'classConstructorCall',
      'doExpressions',
      'trailingFunctionCommas',
      'objectRestSpread',
      'decorators-legacy',
      'classProperties',
      'exportExtensions',
      'exponentiationOperator',
      'asyncGenerators',
      'functionBind',
      'functionSent',
      'dynamicImport',
      'typescript',
    ],
  });
}
