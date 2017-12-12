const { expect } = require('chai');
const { assign, getAssign } = require('../src/index')

describe('test assignDate', () => {

  describe('test root date', () => {
    var target = new Date(),
      source = new Date();
    source.setTime(0);
    assign(target, source);
    it('0', () => {
      expect(target.getTime()).to.be.equal(0);
    });
  });

  describe('test nest date', () => {
    var target = {
        a: {
          b: new Date()
        }
      },
      source = {
        a: {
          b: new Date()
        }
      };
    source.a.b.setTime(0);
    assign(target, source);
    it('0', () => {
      expect(target.a.b.getTime()).to.be.equal(0);
    });
  });

  describe('test nest date depth = 1', () => {
    var target = {
        a: {
          b: new Date()
        }
      },
      source = {
        a: {
          b: new Date()
        }
      };
    source.a.b.setTime(0);
    getAssign({
      depth: 1
    })(target, source);
    source.a.b.setTime(100);
    it('0', () => {
      expect(target.a.b.getTime()).to.be.equal(100);
    });
  });

  describe('test nest date depth = 2', () => {
    var target = {
        a: {
          b: new Date()
        }
      },
      source = {
        a: {
          b: new Date()
        }
      };
    source.a.b.setTime(0);
    getAssign({
      depth: 2
    })(target, source);
    source.a.b.setTime(100);
    it('0', () => {
      expect(target.a.b.getTime()).to.be.equal(0);
    });
  });
});