(function iifeBrackets() { 
    console.log("()iife::", "iife with brackets");
})();

!function iifeExclamation() {
    console.log("!iife::", "iife with exclamation mark");
}();

(() => console.log("=>iife::", "iife with anonymous arrow function"))()