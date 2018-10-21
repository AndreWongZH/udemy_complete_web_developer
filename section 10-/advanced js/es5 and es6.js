const player = "bobby";
let experience = 100;
let wizardlevel = false;

if (experience > 90) {
	wizardlevel = true;
}

const a = function() {
	console.log("hello");
}

const obj = {
	player: "bobby",
	experience: 100,
	wizardlevel: false
};

const {player, experience} = obj;
let {wizardlevel} = obj;

const name = "hello wordl";

const obj = {
	[name]: "ello",
	[1 + 3]: "four"
};


const a = "simon";
const b = true;
const c = {};

const obj = {
	a,
	b,
	c
};

const name = "tonny";
const age = 20;
const grettingBest = `Hellp ${name} you seem to be ${age-10}`;

function greet(name="bob", age=30) {
	return `Hellp ${name} you seem to be ${age-10}`;
}

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('fool');

const add = (a, b) => a + b;