## Immediately Iinvoken Function Expressions ( IIFE )

*[reference]()*

IIFE's are functions that calls it self as the script reaches it.

#### Structures
```js
(function foo1() { // code here... })()
!function foo2() { // code here... }()
```

#### Sketch
```js
(function iifeBrackets() { 
    console.log("()iife::", "iife with brackets");
})();

!function iifeExclamation() {
    console.log("!iife::", "iife with exclamation mark");
}();

(() => console.log("=>iife::", "iife with anonymous arrow function"))()
```

#### Result
```
()iife:: iife with brackets
!iife:: iife with exclamation mark
=>iife:: iife with anonymous arrow function
```
---