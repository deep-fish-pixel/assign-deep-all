const { expect } = require('chai');
const { assign } = require('../src/index')

describe('test assignMap', () => {

  describe('test root map', () => {
    var target = new Map(),
      source = new Map();
    target.set(1, 1);
    target.set(4, 4);
    source.set(1, 1);
    source.set(2, 2);
    source.set(3, 3);
    assign(target, source);

    it('target.size === 4', () => {
      expect(target.size).to.be.equal(4);
    });

  });

  describe('test nest map', () => {
    var target = {
        a: {
          b: new Map()
        }
      },
      source = {
        a: {
          b: new Map()
        }
      };

    target.a.b.set(1, 1);
    target.a.b.set(4, 4);
    source.a.b.set(1, 1);
    source.a.b.set(2, 2);
    source.a.b.set(3, 3);
    var target2 = {};
    assign(target2, target, source);
    it('target2.a.b.size === 4', () => {
      expect(target2.a.b.size).to.be.equal(4);
    });
  });
});