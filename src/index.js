/**
 * assign entry
 */
import extend from './extends';
/*
* deep assign and replace array
* */
export function assign() {
  return getAssign({
    deep: true,
    arrayConcat: false,
    depth: Infinity,
  })(...arguments);
}

/*
 * deep assign and replace array
 * */
export function assignDeep() {
  return getAssign({
    deep: true,
    arrayConcat: false,
    depth: Infinity,
  })(...arguments);
};

/*
 * shallow assign and concat array
 * */
export function assignConcat() {
  return getAssign({
    deep: true,
    arrayConcat: true,
    depth: Infinity,
  })(...arguments);
}

/*
 * shallow assign and replace array
 * */
export function assignShallow() {
  return getAssign({
    deep: false,
    arrayConcat: false,
    depth: Infinity,
  })(...arguments);
}

/*
 * shallow assign and replace array
 * */
export function assignShallowConcat() {
  return getAssign({
    deep: false,
    arrayConcat: true,
    depth: Infinity,
  })(...arguments);
}

/*
 * get different assign by options
 * */
export function getAssign(options = {}) {
  options = Object.assign({
    deep: true,
    arrayConcat: false,
    depth: Infinity,
  }, options);

  return function (target, ...sources) {
    return sources.reduce(function (target, source){
      return extend(options, target, source);
    }, target);
  }
}