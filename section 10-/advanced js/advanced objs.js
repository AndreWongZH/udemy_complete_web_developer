//reference type

let obj1 = { value:10 };
let obj2 = obj1;
let obj3 = { value:10};

//context
 const obj4 = {
 	a: function() {
 		console.log(this);
 	}
 }

 //instantiation
 class Player {
 	constructor(name, type) {
 		this.name = name;
 		this.type = type;
 	}

 	introduce() {
 		console.log(`Hi I am ${this.name}, i am a ${this.type}`);
 	}
 }

 class Wizard extends Player {
 	constructor(name, type) {
 		super(name, type);
 	}
 	play() {
 		console.log(`weee i am a ${this.type}`);
 	}
 }

const wizard1 = new Wizard('shelly', 'healer');
const wizard2 = new Wizard('shawn', 'dark magic');



