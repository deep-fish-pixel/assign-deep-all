'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isFunction = isFunction;
exports.isArray = isArray;
exports.isObject = isObject;
exports.isSet = isSet;
exports.isMap = isMap;
exports.isNumber = isNumber;
exports.isString = isString;
exports.isBoolean = isBoolean;
exports.isDate = isDate;
exports.isRegExp = isRegExp;
exports.isNullUndefined = isNullUndefined;
/*
 * author: mawei
 * get the target type
 * */
function isFunction(method) {
  return typeof method === 'function';
}

function isArray(array) {
  return (typeof array === 'undefined' ? 'undefined' : _typeof(array)) === 'object' && Object.prototype.toString.call(array) === '[object Array]';
}

function isObject(obj) {
  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj != null;
}

function isSet(obj) {
  if (typeof Set === 'function') {
    return obj instanceof Set && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj && isFunction(obj.add) && isFunction(obj.clear) && isFunction(obj.forEach) && isNumber(obj.size);
  }
  return false;
}

function isMap(obj) {
  if (typeof Map === 'function') {
    return obj instanceof Map && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj && isFunction(obj.set) && isFunction(obj.get) && isFunction(obj.clear) && isFunction(obj.forEach) && isNumber(obj.size);
  }
  return false;
}

function isNumber(obj) {
  return typeof obj === 'number';
}

function isString(obj) {
  return typeof obj === 'string';
}

function isBoolean(obj) {
  return typeof obj === 'boolean';
}

function isDate(array) {
  return (typeof array === 'undefined' ? 'undefined' : _typeof(array)) === 'object' && Object.prototype.toString.call(array) === '[object Date]';
}

function isRegExp(array) {
  return (typeof array === 'undefined' ? 'undefined' : _typeof(array)) === 'object' && Object.prototype.toString.call(array) === '[object RegExp]';
}

function isNullUndefined(obj) {
  return obj === null || obj === undefined;
}