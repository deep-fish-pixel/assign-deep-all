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
    concat: false
  })(...arguments);
}

/*
 * deep assign and replace array
 * */
export const assignDeep = assign;

/*
 * shallow assign and concat array
 * */
export function assignConcat() {
  return getAssign({
    deep: true,
    concat: true
  })(...arguments);
}

/*
 * shallow assign and replace array
 * */
export function assignShallow() {
  return getAssign({
    deep: false,
    concat: false
  })(...arguments);
}

/*
 * shallow assign and replace array
 * */
export function assignShallowConcat() {
  return getAssign({
    deep: false,
    concat: true
  })(...arguments);
}

export function getAssign(options = {}) {
  options = Object.assign({
    deep: true,
    concat: false
  }, options);

  return function (target, ...sources) {
    sources.forEach(function (source) {
      extend(options, target, source);
    });
  };
}

var target = {
  a: {
    b: {
      c: 1
    }
  },
  list: [1, 2]
};
var source = {
  a: {
    b: {
      c: 2,
      d: 3
    }
  },
  list: [3, 4, 5]
};
assign(target, source);
source.a.b.c = 22;
console.log(JSON.stringify(target)); //{"a":{"b":{"c":2,"d":3}},"list":[3,4,5]}