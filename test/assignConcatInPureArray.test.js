const { expect } = require('chai');
const { assignConcat } = require('../src/index')

describe('test assignConcatInPureArray', () => {
  describe('test one source', () => {
    var target = [{id: 1}],
      source = [{id: 2}, {id: 3}];

    assignConcat(target, source);
    source.push({id: 4});

    it('target.length', () => {
      expect(target.length).to.be.equal(3);
    });

    it('target[3].id', () => {
      expect(target[2].id).to.be.equal(3);
    });

  });

  describe('test two source', () => {
    var target = [{id: 1}],
      source = [{id: 2}, {id: 3}],
      source2 = [{id: 4}, {id: 5}, {id: 6}];

    assignConcat(target, source, source2);
    source2.push({id: 7});

    it('target.length', () => {
      expect(target.length).to.be.equal(6);
    });

    it('target[5].id', () => {
      expect(target[5].id).to.be.equal(6);
    });

  });
});