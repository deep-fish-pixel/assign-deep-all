'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assignDeep = undefined;
exports.assign = assign;
exports.assignConcat = assignConcat;
exports.assignShallow = assignShallow;
exports.assignShallowConcat = assignShallowConcat;
exports.getAssign = getAssign;

var _extends = require('./extends');

var _extends2 = _interopRequireDefault(_extends);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* deep assign and replace array
* */
function assign() {
  return getAssign({
    deep: true,
    concat: false
  }).apply(undefined, arguments);
}

/*
 * deep assign and replace array
 * */
/**
 * assign entry
 */
var assignDeep = exports.assignDeep = assign;

/*
 * shallow assign and concat array
 * */
function assignConcat() {
  return getAssign({
    deep: true,
    concat: true
  }).apply(undefined, arguments);
}

/*
 * shallow assign and replace array
 * */
function assignShallow() {
  return getAssign({
    deep: false,
    concat: false
  }).apply(undefined, arguments);
}

/*
 * shallow assign and replace array
 * */
function assignShallowConcat() {
  return getAssign({
    deep: false,
    concat: true
  }).apply(undefined, arguments);
}

function getAssign() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  options = Object.assign({
    deep: true,
    concat: false
  }, options);

  return function (target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    sources.forEach(function (source) {
      (0, _extends2.default)(options, target, source);
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