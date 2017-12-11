/*
 * author: mawei
 * get the target type
 * */
export function isFunction(method) {
  return typeof method === 'function';
}

export function isArray(array) {
  return Object.prototype.toString.call(array) === '[object Array]';
}

export function isObject(obj) {
  return typeof obj === 'object' && obj != null;
}

export function isNumber(obj) {
  return typeof obj === 'number';
}

export function isString(obj) {
  return typeof obj === 'string';
}

export function isBoolean(obj) {
  return typeof obj === 'boolean';
}

export function isNullUndefined(obj) {
  return obj === null || obj === undefined;
}