/*
 * is unscalable
 * */
import { isBoolean, isNumber, isString } from './types';

export default function isUnscalable(target) {
  return target == null || target == undefined || isNumber(target) || isBoolean(target) || isString(target) || isNumber(target);
}