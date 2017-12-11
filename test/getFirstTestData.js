export function getFirstTargetData() {
  return {
    list: [0],
    a: {
      b: {
        c: [1],
        d: {init: false},
        e: 1,
        f: 1,
        g: 1,
        h: 1,
        i: 1,
        k: 1,
      }
    }
  }
}

export function getFirstSourceData() {
  return {
    list: [
      {id: 1},
      {id: 2},
      {id: 3}
    ],
    a: {
      b: {
        c: [2, 3],
        d: {init: true},
        e: null,
        f: undefined,
        g: 0,
        h: false,
        i: true,
        k: 'hello world',
      }
    },
    w: {
      b: {
        c: [1, 2],
        d: {init: true},
        e: null,
        f: undefined,
        g: 0,
        h: false,
        i: true,
        k: 'hello world!!',
      }
    }
  }
}

export function getFirstSourceData2() {
  return {
    list: [
      {id: 4}
    ],
    a: {
      b: {
        c: ['5', '6', '7'],
        d: {init: '1'},
        e: 'null',
        f: 'undefined',
        g: '0',
        h: 'false',
        i: 'true',
        k: 'hello world!',
      }
    }
  }
}

