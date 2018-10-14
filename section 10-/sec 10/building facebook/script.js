var database = [
	{
		username: "cas",
		password: "123456"
	},
	{
		username: "casm",
		password: "12"
	},
	{
		username: "bob",
		password: "1234"
	},
	{
		username: "kon",
		password: "1"
	},
	{
		username: "merlin",
		password: "123456789"
	},
	{
		username: "deus",
		password: "56"
	},
];

var newsFeed = [
	{
		username: "bob",
		timeline: "so tired from all that learning"
	},
	{
		username: "bob",
		timeline: "so tired from all that learning"
	}
];

var usernamePrompt = prompt("enter username");
var passwordPrompt = prompt("enter password");

function isUserValid(username, password) {
	for (var i =0; i <database.length; i++) {
		if (username === database[i].username &&
			password === database[i].password) {
			return true
		}
	}
	return false;
}

function signIn(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsFeed);
	} else {
		alert("sorry, wrong username and password");
	}
}

signIn(usernamePrompt, passwordPrompt);