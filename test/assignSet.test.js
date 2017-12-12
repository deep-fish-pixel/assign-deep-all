const { expect } = require('chai');
const { assign } = require('../src/index')

describe('test assignSet', () => {

  describe('test root set', () => {
    var target = new Set(),
      source = new Set();
    target.add(1);
    target.add(4);
    source.add(1);
    source.add(2);
    source.add(3);
    assign(target, source);

    it('target.size === 4', () => {
      expect(target.size).to.be.equal(4);
    });

  });

  describe('test nest set', () => {
    var target = {
        a: {
          b: new Set()
        }
      },
      source = {
        a: {
          b: new Set()
        }
      };

    target.a.b.add(1);
    target.a.b.add(4);
    source.a.b.add(1);
    source.a.b.add(2);
    source.a.b.add(3);
    assign(target, source);
    it('target.a.b.size === 4', () => {
      expect(target.a.b.size).to.be.equal(4);
    });
  });
});