'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUnscalable;

var _types = require('./types');

function isUnscalable(target) {
  return target == null || target == undefined || (0, _types.isNumber)(target) || (0, _types.isBoolean)(target) || (0, _types.isString)(target) || (0, _types.isNumber)(target);
} /*
   * is unscalable
   * */