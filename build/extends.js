'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
                                                                                                                                                                                                                                                                              * extend object or array in deep or shallow
                                                                                                                                                                                                                                                                              * */


exports.default = extend;

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _cloneDeep = require('clone-deep');

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _isUnscalable = require('./isUnscalable');

var _isUnscalable2 = _interopRequireDefault(_isUnscalable);

var _types = require('./types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* handle extends
* */
function handle(options, target, nextSource) {
  if ((0, _isUnscalable2.default)(nextSource)) {
    return target;
  }
  var deep = options.deep;

  if ((0, _types.isArray)(target) && (0, _types.isArray)(nextSource)) {
    if (!options.concat) {
      nextSource.forEach(function (element, index) {
        target[index] = deep ? (0, _cloneDeep2.default)(element) : element;
      });
    } else {
      nextSource.forEach(function (element) {
        target.push(deep ? (0, _cloneDeep2.default)(element) : element);
      });
    }
  } else if ((0, _types.isObject)(target) || (0, _types.isArray)(nextSource)) {
    var value;
    for (var nextKey in nextSource) {
      if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
        value = nextSource[nextKey];
        if (!deep || (0, _isUnscalable2.default)(value)) {
          target[nextKey] = value;
        } else if ((0, _types.isNullUndefined)(target[nextKey])) {
          if ((0, _types.isArray)(value)) {
            target[nextKey] = [];
          } else {
            target[nextKey] = {};
          }
          handle(options, target[nextKey], value);
        } else {
          handle(options, target[nextKey], value);
        }
      }
    }
  }
}

/*
 * extend object or array in deep or shallow
 * */
function extend(options, target, nextSource) {
  if (process.env.NODE_ENV !== 'production') {
    (0, _invariant2.default)(target !== null || target !== undefined, 'target value can\'t be ' + String(target).toString());
    (0, _invariant2.default)(!(0, _types.isNumber)(target) || !(0, _types.isString)(target) || !(0, _types.isBoolean)(target), 'target value type can\'t be ' + (typeof target === 'undefined' ? 'undefined' : _typeof(target)));
  }
  handle(options, target, nextSource);
}