function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");
    const listItem = document.createElement("li");

    listItem.innerHTML = `
        <span onclick="toggleTask(this)">${taskText}</span>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(listItem);
    taskInput.value = "";
}

function toggleTask(taskElement) {
    taskElement.parentElement.classList.toggle("completed");
}

function deleteTask(deleteButton) {
    const taskItem = deleteButton.parentElement;
    taskItem.remove();
}
