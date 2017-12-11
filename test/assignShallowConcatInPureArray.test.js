const { expect } = require('chai');
const { assignShallowConcat } = require('../src/index')

describe('test assignShallowConcatInPureArray', () => {
  describe('test one source', () => {
    var target = [{id: 1}],
      source = [{id: 2}, {id: 3}];

    assignShallowConcat(target, source);
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

    assignShallowConcat(target, source, source2);
    source2.push({id: 7});

    it('target.length', () => {
      expect(target.length).to.be.equal(6);
    });

    it('target[5].id', () => {
      expect(target[5].id).to.be.equal(6);
    });

  });
});