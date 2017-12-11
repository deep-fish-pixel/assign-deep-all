const { expect } = require('chai');
const { assignShallow } = require('../src/index');

describe('test assignShallowInPureArray', () => {
  describe('test one source', () => {
    var target = [{id: 1}],
      source = [{id: 2}, {id: 3}];

    assignShallow(target, source);
    source.push({id: 4});

    it('target.length', () => {
      expect(target.length).to.be.equal(2);
    });

    it('target[1].id', () => {
      expect(target[1].id).to.be.equal(3);
    });

  });

  describe('test two source', () => {
    var target = [{id: 1}],
      source = [{id: 2}, {id: 3}],
      source2 = [{id: 4}, {id: 5}, {id: 6}];

    assignShallow(target, source, source2);
    source2.push({id: 7});

    it('target.length', () => {
      expect(target.length).to.be.equal(3);
    });

    it('target[2].id', () => {
      expect(target[2].id).to.be.equal(6);
    });

  });
});