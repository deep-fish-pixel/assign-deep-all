/*
* extend object or array in deep or shallow
* */
import invariant from 'invariant';
import clone from 'clone';
import isUnscalable from './isUnscalable';
import {
  isArray,
  isBoolean,
  isNumber,
  isObject,
  isString,
  isDate,
  isRegExp,
  isSet,
  isMap,
  isNullUndefined
} from './types';

/*
* handle extends
* */
function handle (options, target, nextSource) {
  if(isUnscalable(nextSource)){
    return target;
  }
  const deep = options.deep;

  if(isArray(target) && isArray(nextSource)){
    if(!options.arrayConcat){
      nextSource.forEach(function (element, index) {
        target[index] = deep ? clone(element) : element;
      });
    }
    else{
      nextSource.forEach(function (element) {
        target.push(deep ? clone(element) : element);
      });
    }
  }
  else if(isSet(target) && isSet(nextSource)){
    nextSource.forEach(function (element) {
      target.add(deep ? clone(element) : element);
    });
  }
  else if(isMap(target) && isMap(nextSource)){
    nextSource.forEach(function (element, key) {
      target.set(key, deep ? clone(element) : element);
    });
  }
  else if(isDate(nextSource)){
    if(isDate(target)){
      target.setTime(nextSource.getTime());
    }
    else{
      target = new Date().setTime(nextSource.getTime());
    }
  }
  else if(isRegExp(nextSource)){
    target = clone(nextSource);
  }
  else if(isObject(target)){
    var value;
    for (var nextKey in nextSource) {
      if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
        value = nextSource[nextKey];
        if(!deep
          || isUnscalable(value)){
          target[nextKey] = value;
        }
        else{
          var next = true;
          if(isDate(value)){
            target[nextKey] = new Date();
          }
          else if(isRegExp(value)){
            target[nextKey] = clone(value);
            next = false;
          }
          else if(isNullUndefined(target[nextKey])){
            if(isArray(value)){
              target[nextKey] = [];
            }
            else if(isSet(value)){
              target[nextKey] = new Set();
            }
            else if(isMap(value)){
              target[nextKey] = new Map();
            }
            else{
              target[nextKey] = {};
            }
          }
          next && handle({
            arrayConcat: options.arrayConcat,
            depth: options.depth - 1,
            deep: options.deep && options.depth !== 1
          }, target[nextKey], value, target, nextKey);
        }
      }
    }
  }
  return target;
}

/*
 * extend object or array in deep or shallow
 * */
export default function extend(options, target, nextSource) {
  if(process.env.NODE_ENV !== 'production'){
    invariant(target !== null || target !== undefined,
      `target value can't be ${String(target).toString()}`);
    invariant(!isNumber(target)
      || !isString(target)
      || !isBoolean(target), `target value type can't be ${typeof target}`);
    invariant(!!options.depth, `assign depth can't be 0!`);
  }
  return handle(options, target, nextSource);
}
