/**
 *
 */

const arrayJoin = (run) => {
	const philosophers = ["Aristotle", "Plato", "Sokrates", "Nietzsche", "Kierkegaard"];
	const seperator = "-";

	console.log(philosophers.join(seperator));
};

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13];

/**
 *
 * @param {Number} accumulator
 * @param {Number} currentValue
 */
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(fibonacci.reduce(reducer));

/**
 *
 * @param {Number} accumulator
 * @param {Number} currentValue
 * @param {Number} index
 * @param {Array} array
 */
const avgReducer = (accumulator, currentValue, index, array) => {
	return index < array.length - 1
		? accumulator + currentValue
		: (accumulator + currentValue) / array.length;
};
console.log(fibonacci.reduce(avgReducer));

/**
 *
 */
const philosophies = [
	"Realism",
	"Simulation",
	"Idealism",
	"Realism",
	"Idealism",
	"Simulation",
	"Realism",
	"Idealism"
];

philosophies.reduce = function() {
	let object = {};
	this.forEach((e) => (object[e] ? (object[e] += 1) : (object[e] = 1)));
	return object;
};

console.log(philosophies.reduce());

