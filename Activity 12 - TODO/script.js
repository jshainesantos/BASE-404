const todoInput = document.getElementById("todoInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function () {
  const task = todoInput.value;
  if (task === "") {
    alert("Please enter a task! 😡");
    return;
  }

  const listItem = document.createElement("li");
  listItem.classList.add("list-group-item");
  listItem.textContent = task;

  const deleteButton = document.createElement("span");
  deleteButton.classList.add("btn-close");
  deleteButton.addEventListener("click", function () {
    listItem.remove();
  });

  listItem.prepend(deleteButton);
  taskList.appendChild(listItem);
  todoInput.value = "";
});

taskList.addEventListener("click", function (event) {
  const target = event.target;

  if (target.classList.contains("list-group-item")) {
    target.classList.toggle("done");
  }
});
