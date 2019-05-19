# Array Methods and Prototypes

| indexes | examples |
|---|---|
| [Array.join]() | *[reference]()* |
| [Array.reduce]() | *[reference]()* | 
| [Array.foreach]() | *[reference]()* |
| [Array.map]() | *[reference]()* |
| [Array.prototype]() | *[reference]()* |

## Array.join

*[reference]()*

...

* `seperator` is the argument for the chars that will connect all the elements in the array.
* `returns` a string with all elements connected with the `seperator`.

**result:** `element` `seperator` `element` `seperator` `element`

#### Structure
```js
Array.join(seperator);
```

#### Sketch
```js
const philosophers = ["Aristotle", "Plato", "Sokrates", "Nietzsche", "Kierkegaard"];
const seperator = "-";

console.log("Array.join()::", philosophers.join(seperator));
```

#### Result
```
Array.join(seperator):: Aristotle-Plato-Sokrates-Nietzsche-Kierkegaard
```
---



## Array.reduce
*[reference]()*

...

* `callback` is the argument for the function reference to handle the reduction.
* `previousValue` is the argument for the last value returned.
* `currentValue` ...
* `currentIndex` ...
* `array` ...
* `returns` ...

**result:** `element` + `element` + `element`

#### Structure
```js
Array.reduce(callback(previousValue, currentValue, currentIndex, array)):
```

#### Sketch
```js
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13];
const sum = (accumulator, currentValue) => accumulator + currentValue;
```

```js
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13];
const average = (accumulator, currentValue, index, array) => {
	return index < array.length - 1
		? accumulator + currentValue
		: (accumulator + currentValue) / array.length;
};
```
```js
console.log("Array.reduce(sum)::", fibonacci.reduce(sum));
console.log("Array.reduce(average)::", fibonacci.reduce(average));
```

#### Result
```
Array.reduce(sum):: 
Array.reduce(average):: 
```
---



## Array.prototype ( reduce )
*[reference]()*

...

* `callback` is the argument for the function reference to handle the reduction.
* `previousValue` is the argument for the last value returned.
* `currentValue` ...
* `currentIndex` ...
* `array` ...
* `returns` ...

**result:** `element` + `element` + `element`

#### Structure
```js
Array.prototype
```

#### Sketch
```js
const philosophies = [ "Realism", "Simulation", "Idealism", "Realism", "Idealism", "Simulation" ];

philosophies.reduce = function() {
	let object = {};
	this.forEach((e) => (object[e] ? (object[e] += 1) : (object[e] = 1)));
	return object;
};
```

#### Result
```
Array.reduce(sum):: 
```
---

