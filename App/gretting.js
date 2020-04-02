const form = document.querySelector(".js_form"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js_greetings");

const userLs = "user",
	  showingCn = "showing";

function saveName(text) {
	localStorage.setItem(userLs, text);
}	  

function handleSubmit(event) {
	event.preventDefault();
	const value = input.value;
	paintGreeting(value);
	saveName(value);
}

function askForName() {
	form.classList.add(showingCn);
	form.addEventListener("submit", handleSubmit);
}	  

function paintGreeting(text) {
	form.classList.remove(showingCn);
	greeting.classList.add(showingCn);
	greeting.innerText = `Hello ${text}`;
}

function loadName() {
	const user = localStorage.getItem(userLs);
	if(user === null) {
		askForName();
	} else {
		paintGreeting(user);
	}
}

function init() {
	loadName();
}

init();