const first = () => {
	const greet = 'hi';
	const second = () => {
		alert(greet);
	}
	return second;
}

//closures
const newFunc = first();
newFunc();

//curried
const multiply = (a, b) => a + b;
const curriedMultiply = (a) => (b) => a + b;

//compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;

compose(sum, sum)(5);

//avoiding side effect aka. outside the scope
let a = 1;
const func = () => {
	a = 2;
}

//achieve functional purity