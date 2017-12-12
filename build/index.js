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
    arrayConcat: false
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
    arrayConcat: true
  }).apply(undefined, arguments);
}

/*
 * shallow assign and replace array
 * */
function assignShallow() {
  return getAssign({
    deep: false,
    arrayConcat: false
  }).apply(undefined, arguments);
}

/*
 * shallow assign and replace array
 * */
function assignShallowConcat() {
  return getAssign({
    deep: false,
    arrayConcat: true
  }).apply(undefined, arguments);
}

/*
 * get different assign by options
 * */
function getAssign() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  options = Object.assign({
    deep: true,
    arrayConcat: false
  }, options);

  return function (target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    return sources.reduce(function (target, source) {
      return (0, _extends2.default)(options, target, source);
    }, target);
  };
}