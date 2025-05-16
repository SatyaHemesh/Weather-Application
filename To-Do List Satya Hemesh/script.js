function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskList = document.getElementById("taskList");

  // Create list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function () {
    taskList.removeChild(li);
  };

  // Append button and item to the list
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Clear input
  input.value = "";
}
