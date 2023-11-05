// script.js

//replaced function with const, added parentheses and removed curly brackets as we are not using return
const add = (a, b) => a + b; 

const multiply = (a, b) => a * b; //changed + to *

// Define the 'internal' function
function internal() {
	const added = this.add(this.internal.a, this.internal.b); // Calculate the sum of internal.a and internal.b using the 'add' function
	const multiplied = this.multiply(this.internal.a, this.internal.b); // Calculate the product of internal.a and internal.b using the 'multiply' function
	console.log(multiplied); //log result of multiplied
    return this;             // Return the object for chaining
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
};

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
};

example1.calculate();
example2.calculate();