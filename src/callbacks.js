//https://github.com/CBA-S4-JavaScript/javascript-exercise-day-1/blob/master/callbacks.md

const mutator = (number, callback) => callback(number);

const increment = (number) => ++number;
const decrement = (number) => --number;

console.log(mutator(10, increment))
console.log(mutator(10, decrement))

const names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik']

function myFilter(array, callback) {
    var arr = []
    array.map(e => callback(e) ? arr.push(e) : null)
    return arr
}

function myFilterCallback(e) {
    return e.length <= 3
}

const ownFilteredNames = myFilter(names, myFilterCallback)
console.log(ownFilteredNames)

//////7

const names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik']

function myMap(array, callback) {
    arr = []
    array.forEach(e => arr.push(callback(e)))
    return arr
}

function myMappedCallback(e) {
    return e.toUpperCase()
}

const ownMappedNames = myMap(names, myMappedCallback)
console.log(ownMappedNames)