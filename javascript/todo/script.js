let inputTodo = document.getElementById("input-todo");
let addTodo = document.getElementById("add-todo");
let todoList = document.getElementById("todo-list");

addTodo.addEventListener("click", function (e) {
  let todoText = inputTodo.value.trim();

  if (todoText.length > 0) {
    let div = document.createElement("div");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let p = document.createElement("p");
    p.classList.add("todo");
    let button = document.createElement("button");
    button.setAttribute("class", "remove-todo");
    button.innerText = "Remove";

    p.innerText = todoText;

    div.appendChild(checkbox);
    div.appendChild(p);
    div.appendChild(button);
    todoList.appendChild(div);

    inputTodo.value = "";
  }
});

todoList.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove-todo")) {
    e.target.parentElement.remove();
  }
});

todoList.addEventListener("click", function (e) {
  if (e.target && e.target.nodeName == "INPUT") {
    let parent = e.target.parentElement;
    let text = parent.querySelector(".todo");
    if (e.target.checked) {
      text.style.textDecoration = "line-through";
    } else {
      text.style.textDecoration = "none";
    }
  }
  //   if (e.target.classList.contains("todo")) {
  //     if (e.target.classList.contains("completed")) {
  //       e.target.style.textDecoration = "none";
  //       e.target.classList.remove("completed");
  //     } else {
  //       e.target.style.textDecoration = "line-through";
  //       e.target.classList.add("completed");
  //     }
  //   }
});
