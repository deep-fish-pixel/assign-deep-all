/*
* extend object or array in deep or shallow
* */
import invariant from 'invariant';
import cloneDeep from 'clone-deep';
import isUnscalable from './isUnscalable';
import {
  isArray,
  isBoolean,
  isNumber,
  isObject,
  isString,
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
    if(!options.concat){
      nextSource.forEach(function (element, index) {
        target[index] = deep ? cloneDeep(element) : element;
      });
    }
    else{
      nextSource.forEach(function (element) {
        target.push(deep ? cloneDeep(element) : element);
      });
    }
  }
  else if(isObject(target) || isArray(nextSource)){
    var value;
    for (var nextKey in nextSource) {
      if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
        value = nextSource[nextKey];
        if(!deep || isUnscalable(value)){
          target[nextKey] = value;
        }
        else if(isNullUndefined(target[nextKey])){
          if(isArray(value)){
            target[nextKey] = [];
          }
          else{
            target[nextKey] = {};
          }
          handle(options, target[nextKey], value);
        }
        else{
          handle(options, target[nextKey], value);
        }
      }
    }
  }
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
  }
  handle(options, target, nextSource);
}
