# assign-deep-all
##### Assign object or array deep or shallow. 

This can assign object、array、date、regExp、set、map deep or shallow.
And can assign array by merge or cancat.

### Install

```
npm install --save assign-deep-all 
```

### Examples

##### Assign object deep

```
import {assign} from 'assign-deep-all';

var target = {
  a: {
    b: {
      c: 1
    }
  }, 
  list: [1, 2]
};
var source = {
  a: {
    b: {
      c: 2, 
      d: 3
    }
  }, 
  list: [3, 4, 5]
};
assign(target, source);
source.a.b.c = 22;
console.log(JSON.stringify(target));//{"a":{"b":{"c":2,"d":3}},"list":[3,4,5]}

```
Because assign deep, target.a.b.c is alse 1 number.

##### Assign object deep and concated array

```
import {assignConcat} from 'assign-deep-all';

var target = {
  a: {
    b: {
      c: 1
    }
  }, 
  list: [1, 2]
};
var source = {
  a: {
    b: {
      c: 2, 
      d: 3
    }
  }, 
  list: [3, 4, 5]
};
assignConcat(target, source);
source.a.b.c = 22;
console.log(JSON.stringify(target));
//{"a":{"b":{"c":2,"d":3}},"list":[1,2,3,4,5]}
```

Because assign deep, target.a.b.c is alse 1 number. But array assign concated, so list's length is 5.

##### Assign object shallow

```
import {assignShallow} from 'assign-deep-all';

var target = {
  a: {
    b: {
      c: 1
    }
  }, 
  list: [1, 2]
};
var source = {
  a: {
    b: {
      c: 2, 
      d: 3
    }
  }, 
  list: [3, 4, 5]
};
assignShallow(target, source);
source.a.b.c = 22;
console.log(JSON.stringify(target));
//{"a":{"b":{"c":22,"d":3}},"list":[3,4,5]}
```

##### Assign object shallow and concated array

```
import {assignShallowConcat} from 'assign-deep-all';

var target = {
  a: {
    b: {
      c: 1
    }
  }, 
  list: [1, 2]
};
var source = {
  a: {
    b: {
      c: 2, 
      d: 3
    }
  }, 
  list: [3, 4, 5]
};
assignShallowConcat(target, source);
source.a.b.c = 22;
console.log(JSON.stringify(target));
//{"a":{"b":{"c":22,"d":3}},"list":[3,4,5]}
```
The result is equal last one, because assign is shallow but source.list is nested object. We can point out the difference in next demo.

##### Assign array shallow and concated

```
import {assignShallowConcat} from 'assign-deep-all';

var target = [1, 2];
var source = [3, 4, 5];
assignShallowConcat(target, source);
console.log(JSON.stringify(target));
//[1,2,3,4,5]
```

##### Assign array shallow but not concated

```
import {assignShallow} from 'assign-deep-all';

var target = [1, 2];
var source = [3, 4, 5];
assignShallow(target, source);
console.log(JSON.stringify(target));
//[3,4,5]
```
This result differs from the last one; 

##### Assign set

```
import {assign} from 'assign-deep-all';

var target = new Set(),
    source = new Set();
    target.add(1);
    target.add(4);
    source.add(1);
    source.add(2);
    source.add(3);
    assign(target, source);
```
This target.length is 4; 

##### Assign map

```
import {assign} from 'assign-deep-all';

var target = new Map(),
    source = new Map();
    target.set(1, 1);
    target.set(4, 4);
    source.set(1, 1);
    source.set(2, 2);
    source.set(3, 3);
    assign(target, source);
```
This target.length is 4; 

##### Get assign by options

If the aboves can't meet the needs, you can use getAssign to achieve your custom need.
And if you use depth to limit nest steps,  only use getAssign to achieve that;

```
import {getAssign} from 'assign-deep-all';

var target = [1, 2];
var source = [3, 4, 5];
getAssign({
    deep: true, //default true
    arrayConcat: true, //default false
    depth: 3, //default Infinity
  })(target, source);
console.log(JSON.stringify(target));//[1,2,3,4,5]
```

### API

##### getAssign(options)

Get different assign method by options.

```
options = {
    deep: true, //deep or shallow assign. default true
    arrayConcat: false, //assign array merge or concat. default false
    depth: 3, //assign deep depth nest. default Infinite.
}
```
Note: if deep value is false, depth value is unvalide;
Only use getAssign to achieve limited nest steps by depth setting;

##### assign(target, ...sources) 

deep assign but array is merge

##### assignDeep(target, ...sources)

deep assign and array is merged

##### assignConcat(target, ...sources)

deep assign but array is concated

##### assignShallow(target, ...sources)

shallow assign and array is merged

##### assignShallowConcat(target, ...sources)

shallow assign but array is concated
