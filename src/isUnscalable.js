/*
 * is unscalable
 * */
import {
  isBoolean,
  isNumber,
  isString,
  isDate,
  isRegExp,
} from './types';

export default function isUnscalable(target) {
  return target == null
    || target == undefined
    || isBoolean(target)
    || isString(target)
    || isNumber(target);
}
