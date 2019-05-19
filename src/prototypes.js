function Person(first, last, age, eyecolor) {
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eyeColor = eyecolor;
}

Person.prototype.name = function() {
	return this.firstName + " " + this.lastName;
};

let myPerson = new Person("marc", "A.", 24, "blue");

console.log(myPerson.name());


var foo = [1, 2, 3, 4]
foo.p = 'yourPrototype'
console.log(foo)
console.log(foo.p)

/* output
1, 2, 3, 4, p: yourPrototype
yourPrototype
*/