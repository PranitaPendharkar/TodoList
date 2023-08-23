//kat
const inputText = document.getElementById("user-input");
const addButton = document.getElementById("btn_plus");
const taskList = document.getElementById("task-list");
const taskQuery = document.getElementsByClassName("task");
const deleteAllButton = document.getElementById("clear_all_button");
let taskArray = [];

const add_task = () => {
  const newListItem = document.createElement("li");
  const newLabel = document.createElement("label");
  const newContainer = document.createElement("div");
  const newEditItem = document.createElement("i");
  const newDeleteItem = document.createElement("i");

  newListItem.className = "task";
  newLabel.className = "task-label";
  newContainer.className = "actions";
  newEditItem.className = "fa fa-edit";
  newDeleteItem.className = "fa fa-trash-o";

  newEditItem.style = "font-size: 24px";
  newDeleteItem.style = "font-size: 24px";

  newLabel.innerHTML = inputText.value;
  inputText.value = "";

  newListItem.appendChild(newLabel);

  newContainer.appendChild(newEditItem);
  newContainer.appendChild(newDeleteItem);

  newListItem.appendChild(newContainer);

  taskList.appendChild(newListItem);

  taskArray.push(newListItem);

  newDeleteItem.addEventListener("click", () => {
    newListItem.remove();
  });

  newEditItem.addEventListener("click", () => {
    newLabel.innerHTML = inputText.value;
    inputText.value = "";
  });
};

const clearall = () => {
  for (let i = 0; i < taskQuery.length; i++) {
    taskQuery[i].innerHTML = "";
  }
};
