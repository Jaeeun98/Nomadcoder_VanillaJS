const toDoForm = document.querySelector(".js_toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js_toDoList");

const toDosLs = "toDos";

let toDos = [];

function deleteToDo(event) {
	const btn = event.target;
	const li = btn.parentNode;
	toDoList.removeChild(li);
	const cleanToDos = toDos.filter(function(toDo){
		return toDo.id !== parseInt(li.id);
	})
	toDos = cleanToDos
	saveToDos();
}

function saveToDos() {
	localStorage.setItem(toDosLs, JSON.stringify(toDos));
}

function paintTodo(text) {
	const li = document.createElement("li");
	const delBtn = document.createElement("button");
	const span = document.createElement("span");
	const newId = toDos.length + 1;
	delBtn.innerText = "✖";
	delBtn.addEventListener("click", deleteToDo);
	span.innerText = text;
	li.appendChild(span);
	li.appendChild(delBtn);
	toDoList.appendChild(li);
	li.id = newId;
	const toDoOb = {
		text : text,
		id : newId
	};

	toDos.push(toDoOb);
	saveToDos();
}

function handleSubmit(event) {
	event.preventDefault();
	const value = toDoInput.value; 
	paintTodo(value);
	toDoInput.value = "";
}

function loadToDos() {
	const loadedToDos = localStorage.getItem(toDosLs);
	if(loadedToDos !== null) {
		const parsedToDos = JSON.parse(loadedToDos);
		parsedToDos.forEach(function(toDo) {
			paintTodo(toDo.text);	
		})
	}
}

function init() {
	loadToDos();
	toDoForm.addEventListener("submit", handleSubmit);
}   

init();   