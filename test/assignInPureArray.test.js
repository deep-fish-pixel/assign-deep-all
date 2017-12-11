const { expect } = require('chai');
const { assign } = require('../src/index')

describe('test assignInPureArray', () => {
  describe('test one source', () => {
    var target = [{id: 1}],
      source = [{id: 2}, {id: 3}];

    assign(target, source);
    source.push({id: 4});

    it('target.length', () => {
      expect(target.length).to.be.equal(2);
    });

    it('target[3].id', () => {
      expect(target[1].id).to.be.equal(3);
    });

  });

  describe('test two source', () => {
    var target = [{id: 1}],
      source = [{id: 4}, {id: 5}, {id: 6}],
      source2 = [{id: 2}, {id: 3}];

    assign(target, source, source2);
    source2.push({id: 7});

    it('target.length', () => {
      expect(target.length).to.be.equal(3);
    });

    it('target[3].id', () => {
      expect(target[2].id).to.be.equal(6);
    });

  });
});