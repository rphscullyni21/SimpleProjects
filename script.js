// document.getElementById("editTaskBtn").disabled = true;

// function addTask(event) {
//   if (event.key === "Enter") {
//     const taskInput = document.getElementById("taskInput");
//     const taskList = document.getElementById("taskList");

//     if (taskInput.value.trim() !== "") {
//       const li = document.createElement("li");
//       li.innerHTML = `
//                 ${taskInput.value}
//                 <button onclick="removeTask(this)">Remove</button>
//             `;
//       taskList.appendChild(li);
//       document.getElementById("editTaskBtn").style.display = "inline-block";
//       document.getElementById("taskFilter").style.display = "inline-block";
//       document.getElementById("editTaskBtn").disabled = false;
//       taskInput.value = ""; // Clear input field
//       saveTasks();
//       //   document.getElementById("editTaskBtn").disabled = false;
//     }
//   }
// }

// function addTask() {
//   const taskInput = document.getElementById("taskInput");
//   const taskDate = document.getElementById("taskDate");
//   const taskTime = document.getElementById("taskTime");
//   const taskList = document.getElementById("taskList");

//   if (taskInput.value.trim() !== "") {
//     const li = document.createElement("li");
//     li.innerHTML = `
//             <div>
//                 <strong>Task:</strong> ${taskInput.value}<br>
//                 <strong>Date:</strong> ${taskDate.value}<br>
//                 <strong>Time:</strong> ${taskTime.value}
//             </div>
//             <button onclick="removeTask(this)">Remove</button>
//             <button onclick="editTaskText(this)">Edit</button>
//         `;
//     taskList.appendChild(li);

//     // Save tasks to local storage
//     saveTasks();

//     // Clear input fields
//     taskInput.value = "";
//     taskDate.value = "";
//     taskTime.value = "";
//   }
// }

// function removeTask(element) {
//   element.parentElement.remove();

//   // Save tasks to local storage after a task is removed
//   saveTasks();
// }

// function editTask(button) {
//   const taskText = document.getElementById("taskList");
//   const tasks = taskList.getElementsByTagName("li");
//   const newTaskText = prompt("Edit task:", taskText.textContent);
//   for (const task of tasks) {
//     const editButton = task.querySelector("button"); // Find the button inside the task
//     editButton.addEventListener("click", function () {
//       const taskText = task.firstChild;
//       const newTaskText = prompt("Edit task:", taskText.textContent);

//       if (newTaskText !== null && newTaskText.trim() !== "") {
//         taskText.textContent = newTaskText;
//       }
//     });
//   }
//   if (newTaskText !== null && newTaskText.trim() !== "") {
//     taskText.textContent = newTaskText;
//     document.getElementById("editTaskBtn").disabled = false;
//   }
// }

// function filterTasks() {
//   const taskList = document.getElementById("taskList");
//   const filter = document.getElementById("taskFilter").value;
//   const tasks = taskList.getElementsByTagName("li");

//   for (const task of tasks) {
//     const taskStatus = task.classList.contains("finished")
//       ? "finished"
//       : "not-started";
//     task.style.display =
//       filter === "all" || taskStatus === filter ? "flex" : "none";

//     // Add class for coloring based on status
//     task.classList.remove("started", "not-started");
//     if (taskStatus === "not-started") {
//       task.classList.add("not-started");
//     } else if (taskStatus === "started") {
//       task.classList.add("started");
//     }
//   }
// }
// function saveTasks() {
//   const taskList = document.getElementById("taskList");
//   const tasks = taskList.getElementsByTagName("li");
//   const taskArray = [];

//   for (const task of tasks) {
//     taskArray.push(task.firstChild.textContent.trim());
//   }

//   localStorage.setItem("tasks", JSON.stringify(taskArray));
// }
// function loadTasks() {
//   const taskList = document.getElementById("taskList");
//   const storedTasks = JSON.parse(localStorage.getItem("tasks"));

//   if (storedTasks) {
//     for (const taskText of storedTasks) {
//       const li = document.createElement("li");
//       li.innerHTML = `
//                 ${taskText}
//                 <button onclick="removeTask(this)">Remove</button>

//             <div>
//                 <strong>Task:</strong> ${taskData.task}<br>
//                 <strong>Date:</strong> ${taskData.date}<br>
//                 <strong>Time:</strong> ${taskData.time}<br>
//             </div>
//             <button onclick="removeTask(this)">Remove</button>
//             <button onclick="editTaskText(this)">Edit</button>
//     `;
//       taskList.appendChild(li);
//     }
//     document.getElementById("editTaskBtn").disabled = false;
//   }
// }

// function toggleDateOptions() {
//   const dateOptionsDiv = document.getElementById("dateOptions");
//   dateOptionsDiv.style.display =
//     dateOptionsDiv.style.display === "none" ? "block" : "none";
//   const addTaskButton = document.getElementById("addTaskButton");
//   addTaskButton.innerText =
//     dateOptionsDiv.style.display === "none" ? "Add Task" : "Submit Task";
// }

// // Call the function to load tasks when the page loads
// window.onload = loadTasks;
// window.onload = function () {
//   const storedTasks = JSON.parse(localStorage.getItem("tasks"));

//   if (storedTasks && storedTasks.length > 0) {
//     // Show the filter dropdown if tasks are present
//     document.getElementById("taskFilter").style.display = "inline-block";

//     // Enable the edit button if tasks are present
//     document.getElementById("editTaskBtn").disabled = false;
//     document.getElementById("taskFilter").disabled = false;
//   }

//   loadTasks();
// };
// Previous version ^^^^^^^^^

document.addEventListener("DOMContentLoaded", function () {
  const taskText = document.getElementById("taskText");
  const taskDate = document.getElementById("taskDate");
  const taskTime = document.getElementById("taskTime");
  const taskList = document.getElementById("taskList");
  const addTaskButton = document.getElementById("addTaskButton");
  const submitTaskButton = document.getElementById("submitTaskButton");
  const editTaskButton = document.getElementById("editTaskButton");
  const dateOptions = document.getElementById("dateOptions");
  const filterTasks = document.getElementById("filterTasks");

  function createTaskElement(text, date, time) {
    const li = document.createElement("li");
    li.innerHTML = `
        Task: ${text}<br>
        Date: ${date}<br>
        Time: ${time}<br>
      `;
    li.classList.add("not-started"); // Initial status is not started
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function () {
      li.remove();
    });
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function () {
      taskText.value = text;
      taskDate.value = date;
      taskTime.value = time;
      li.remove();
      showDateOptions();
    });
    li.appendChild(removeButton);
    li.appendChild(editButton);
    taskList.appendChild(li);
  }

  function addTask() {
    const text = taskText.value;
    const date = taskDate.value;
    const time = taskTime.value;
    if (text && date && time) {
      createTaskElement(text, date, time);
      resetInputFields();
      showDateOptions();
      showFilterTasks();
    }
  }

  function resetInputFields() {
    taskText.value = "";
    taskDate.value = "";
    taskTime.value = "";
  }

  function showDateOptions() {
    dateOptions.classList.remove("hidden");
  }

  function hideDateOptions() {
    dateOptions.classList.add("hidden");
  }

  function showFilterTasks() {
    filterTasks.classList.remove("hidden");
  }

  function hideFilterTasks() {
    filterTasks.classList.add("hidden");
  }

  function filterTasksByStatus(status) {
    const tasks = taskList.querySelectorAll("li");
    tasks.forEach(function (task) {
      const taskStatus = task.classList[0]; // Assumes status class is always the first class
      if (status === "all" || taskStatus === status) {
        task.style.display = "block";
      } else {
        task.style.display = "none";
      }
    });
  }

  addTaskButton.addEventListener("click", addTask);
  submitTaskButton.addEventListener("click", addTask);
  editTaskButton.addEventListener("click", function () {
    createTaskElement(taskText.value, taskDate.value, taskTime.value);
    resetInputFields();
    hideDateOptions();
  });

  filterTasks.addEventListener("change", function () {
    filterTasksByStatus(this.value);
  });
});
