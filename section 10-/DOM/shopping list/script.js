//enter text to add todos
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function addLi() {
	var div = document.createElement("div");
	var li = document.createElement("li");
	var delButt = document.createElement("button");

	//add delete text to delButt
	delButt.appendChild(document.createTextNode("delete"));
	li.appendChild(document.createTextNode(input.value));

	//add eventlistener to li and delbutt for toggle and del
	li.addEventListener("click", onToggle);
	delButt.addEventListener("click", onDel);

	//append li and delButt to div
	div.appendChild(li);
	div.appendChild(delButt);

	//append div to ul
	ul.appendChild(div);

	//reset input textbox value
	input.value = "";
}

function onClick() {
	if (inputLength() > 0) {
		addLi();
	}
}

function onEnter(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		addLi();
	}
}

button.addEventListener("click", onClick);

input.addEventListener("keypress", onEnter);

//configue delete button

var del = document.getElementsByClassName("delete");

function onDel() {
	this.parentNode.parentNode.removeChild(this.parentNode);
}

for (var i=0; i < del.length; i++) {
	del[i].addEventListener("click", onDel);
}


//toggle strikethrough
var li = document.querySelectorAll("li");

function onToggle() {
	if (this.classList.contains("done")) {
		this.classList.toggle("done");
	} else {
		this.classList.add("done");
	}
}

for (var i=0; i < li.length; i++) {
	li[i].addEventListener("click", onToggle);
}

