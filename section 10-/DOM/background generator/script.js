var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color1.addEventListener("change", setGradient);

color2.addEventListener("input", setGradient);
color2.addEventListener("change", setGradient);

function rand() {
	var v1 =Math.floor(Math.random() * 255);
	var v2 =Math.floor(Math.random() * 255);
	var v3 =Math.floor(Math.random() * 255);
	var randColor1 = "rgb(" + v1 + ", " + v2 + ", " + v3 + ")";

	var v4 =Math.floor(Math.random() * 255);
	var v5 =Math.floor(Math.random() * 255);
	var v6 =Math.floor(Math.random() * 255);
	var randColor2 = "rgb(" + v4 + ", " + v5 + ", " + v6 + ")";	

	body.style.background =
	"linear-gradient(to right, "
	+ randColor1
	+ ", "
	+ randColor2
	+ ")";
}


var random = document.createElement("button");
random.appendChild(document.createTextNode("Click to Randomize"));
random.addEventListener("click", rand);
body.appendChild(random);