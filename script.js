function addTask(event) {
  if (event.key === "Enter") {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
      const li = document.createElement("li");
      li.innerHTML = `
                ${taskInput.value}
                <button onclick="removeTask(this)">Remove</button>
            `;
      taskList.appendChild(li);
      taskInput.value = "";
    }
  }
}
function editTask(button) {
  const taskText = button.parentElement.firstChild;
  const newTaskText = prompt("Edit task:", taskText.textContent);

  if (newTaskText !== null && newTaskText.trim() !== "") {
    taskText.textContent = newTaskText;
  }
}

function filterTasks() {
  const taskList = document.getElementById("taskList");
  const filter = document.getElementById("taskFilter").value;
  const tasks = taskList.getElementsByTagName("li");

  for (const task of tasks) {
    const taskStatus = task.classList.contains("finished")
      ? "finished"
      : "not-started";
    task.style.display =
      filter === "all" || taskStatus === filter ? "flex" : "none";

    // Add class for coloring based on status
    task.classList.remove("started", "not-started");
    if (taskStatus === "not-started") {
      task.classList.add("not-started");
    } else if (taskStatus === "started") {
      task.classList.add("started");
    }
  }
}
