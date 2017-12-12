/*
 * author: mawei
 * get the target type
 * */
export function isFunction(method) {
  return typeof method === 'function';
}

export function isArray(array) {
  return typeof array === 'object'
    && Object.prototype.toString.call(array) === '[object Array]';
}

export function isObject(obj) {
  return typeof obj === 'object'
    && obj != null;
}

export function isSet(obj) {
  if(typeof Set === 'function' ){
    return obj instanceof Set
      && typeof obj === 'object'
      && obj
      && isFunction(obj.add)
      && isFunction(obj.clear)
      && isFunction(obj.forEach)
      && isNumber(obj.size);
  }
  return false;
}

export function isMap(obj) {
  if(typeof Map === 'function' ){
    return obj instanceof Map
      && typeof obj === 'object'
      && obj
      && isFunction(obj.set)
      && isFunction(obj.get)
      && isFunction(obj.clear)
      && isFunction(obj.forEach)
      && isNumber(obj.size);
  }
  return false;
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

export function isDate(array) {
  return typeof array === 'object'
    && Object.prototype.toString.call(array) === '[object Date]';
}

export function isRegExp(array) {
  return typeof array === 'object'
    && Object.prototype.toString.call(array) === '[object RegExp]';
}


export function isNullUndefined(obj) {
  return obj === null || obj === undefined;
}
