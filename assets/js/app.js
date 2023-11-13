// TODO: add a todo
// handle submit event from the form
const todoForm = document.querySelector("form");
const todoInput = document.querySelector("form input");
const todoList = document.querySelector("ul");
todoForm.addEventListener("submit", function (event) {
	event.preventDefault();

	// extract value from form
	const todo = todoInput.value;
	console.log(!todo);
	if (!todo) {
		alert("Field cannot be empty");
		return;
	}

	// display new todo in list
	const newLi = document.createElement("li");
	const newCheck = document.createElement("input");
	newCheck.setAttribute("type", "checkbox");
	newLi.appendChild(newCheck);
	const newSpan = document.createElement("span");
	newSpan.innerText = todo;
	newLi.appendChild(newSpan);
	const newBtn = document.createElement("button");
	newBtn.innerText = "❌";
	newLi.appendChild(newBtn);
	todoList.appendChild(newLi);

	// clear the form
	todoInput.value = "";
});

todoList.addEventListener("click", function (event) {
	const elemName = event.target.localName;
	if (elemName === "button") {
		const child = event.target.parentNode;
		todoList.removeChild(child);
	}
});
