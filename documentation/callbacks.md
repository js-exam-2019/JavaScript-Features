## Userdefined Callback Fucntions
*[reference]()*

...

* `callback` is the argument for the function reference to handle the reduction.
* `returns` ...

**result:** `element` + `element` + `element`

#### Structures
```js
const callback = (element) => element;
const foo = (element, callback) => callback(element);
```

#### Sketch
```js
const mutator = (number, callback) => callback(number)
const increment = (number) => ++number;
const decrement = (number) => --number;

console.log("mutator(10, increment)::", mutator(10, increment))
console.log("mutator(10, decrement)::", mutator(10, decrement))
```

#### Result
```
mutator(10, increment):: 11
mutator(10, decrement):: 9
```
---
