//functions

function sayHello() {
	console.log("Hello");
}

sayHello();

var sayBye = function() {
	console.log("Bye");
}

sayBye();

function sing(song) {
	console.log(song);
	console.log(song);
}

sing("kakakka");
sing("makakka");
sing("lululuwwewew");

function multiply(a, b) {
	if (a > 10 || b > 10) {
		return "thats too hard";
	} else {
		return a * b;
	}
}

multiply(5, 10);


//objects

var user = {
	name: "john",
	age: 34,
	hobby: "soccer",
	isMarried: false,
};

//loops

var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study js",
	"eat healthy"
];

for (var i=0; i<todos.length; i++) {
	todos[i] = todos[i] + "!";
}

var counter = 10;
while (counter > 0) {
	console.log(counter);
	counter--;
}

var counter1 = 10
do {
	console.log(counter1);
	counter1--;
} while (counter1 > 0);


todos.forEach(function(i) {
	console.log(i);
})