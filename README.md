# assign-deep-all
##### Assign object or array deep or shallow. 

1. This can assign object deep or shallow. 
2. This alse can assign array in merged or cancated.

### Install

```
npm install --save assign-deep-all 
```

### Introduce

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
console.log(JSON.stringify(target));//{"a":{"b":{"c":2,"d":3}},"list":[1,2,3,4,5]}
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
console.log(JSON.stringify(target));//{"a":{"b":{"c":22,"d":3}},"list":[3,4,5]}
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
console.log(JSON.stringify(target));//{"a":{"b":{"c":22,"d":3}},"list":[3,4,5]}
```
The result is equal last one, because assign is shallow but source.list is nested object. We can point out the difference in next demo.

##### Assign array shallow and concated

```
import {assignShallowConcat} from 'assign-deep-all';

var target = [1, 2];
var source = [3, 4, 5];
assignShallowConcat(target, source);
console.log(JSON.stringify(target));//[1,2,3,4,5]
```

##### Assign array shallow but not concated

```
import {assignShallow} from 'assign-deep-all';

var target = [1, 2];
var source = [3, 4, 5];
assignShallow(target, source);
console.log(JSON.stringify(target));//[3,4,5]
```
This result differs from the last one; 

##### Get assign by options

```
import {getAssign} from 'assign-deep-all';

var target = [1, 2];
var source = [3, 4, 5];
getAssign({
    deep: true, //default true
    concat: true, //default false
  })(target, source);
console.log(JSON.stringify(target));//[1,2,3,4,5]
```

