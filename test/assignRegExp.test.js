const { expect } = require('chai');
const { assign } = require('../src/index')

describe('test assignRegExp', () => {

  describe('test root regExp', () => {
    var target = /a/,
      source = /b/;
    var target2 = assign(target, source);
    it('value', () => {
      expect(target.toString()).to.be.equal('/a/');
    });
    it('value2', () => {
      expect(target2.toString()).to.be.equal('/b/');
    });
  });

  describe('test nest Date', () => {
    var target = {
        a: {
          b: /a/
        }
      },
      source = target = {
        a: {
          b: /b/
        }
      };
    assign(target, source);
    it('value', () => {
      expect(target.a.b.toString()).to.be.equal('/b/');
    });
  });
});