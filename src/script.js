import './style.css';
import infoIcon from '../imgs/info-icon.png';
import deleteIcon from '../imgs/delete-icon.png';

window.addEventListener("DOMContentLoaded", (event) => {
    // Add Task vars
    const addTaskBtn = document.getElementById("btn-add-task");
    console.log(addTaskBtn);
    const modalAddTask = document.getElementById("modal-add-task");
    const submitTaskBtn = document.getElementById("btn-submit-task");
    const addTaskForm = document.getElementById("add-task-form");

    // Add List vars
    const addListBtn = document.getElementById("btn-add-list");
    const modalAddList = document.getElementById("modal-add-list");
    const submitListBtn = document.getElementById("btn-submit-list");
    const addListForm = document.getElementById("add-list-form");

    // Edit task vars
    const editTaskBtn = document.getElementById("btn-edit-task");
    const modalEditTask = document.getElementById("modal-edit-task");
    const editTaskForm = document.getElementById("edit-task-form");

    const body = document.body;

window.onload = function () {
    loadAllTasks();
    loadLists();
};

// Loads all tasks
function loadAllTasks() {
    const mainListTitle = document.querySelector(".main-list-title");
    mainListTitle.textContent = "All Tasks";
    const taskListDiv = document.querySelector(".task-list");
    taskListDiv.innerHTML = "";

    // Load tasks from 'All Tasks'
    const allTasks = JSON.parse(localStorage.getItem('All Tasks')) || [];
    allTasks.forEach((task) => {
        const taskDiv = createTaskElement(task);
        taskListDiv.appendChild(taskDiv);
    });

    // Load tasks from all other lists
    const lists = JSON.parse(localStorage.getItem('lists')) || [];
    lists.forEach((item) => {
        const tasks = JSON.parse(localStorage.getItem(item));
        if (tasks != null) {
            tasks.forEach((task) => {
                const taskDiv = createTaskElement(task);
                taskListDiv.appendChild(taskDiv);
            });
        }
    });
}

// Submitting forms event listeners
addListForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    submitList();
});

addTaskForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    submitTask();
});

editTaskForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    submitEditedTask();
});

// Creates a task div
function createTaskElement(task) {
    const taskDiv = document.createElement("div");
    taskDiv.className = `task task-priority-${task.priority}`;

    const taskNameDiv = document.createElement("div");
    taskNameDiv.className = "task-name";
    taskNameDiv.textContent = task.name;

    const taskDateDiv = document.createElement("div");
    taskDateDiv.className = "task-date";
    taskDateDiv.textContent = task.date;

    const taskBtnInfoDiv = document.createElement("div");
    taskBtnInfoDiv.className = "task-btn-info";
    const infoImg = document.createElement("img");
    infoImg.className = "icon-btn";
    infoImg.src = infoIcon;
    infoImg.alt = "info button";
    infoImg.addEventListener("click", function (e) {
        editTask(e, task);
    });
    taskBtnInfoDiv.appendChild(infoImg);

    const taskBtnDeleteDiv = document.createElement("div");
    taskBtnDeleteDiv.className = "task-btn-delete";

    const deleteImg = document.createElement("img");
    deleteImg.className = "icon-btn";
    deleteImg.src = deleteIcon;
    deleteImg.alt = "delete button";
    deleteImg.addEventListener("click", function () {
        deleteTask(task.name, task.listName);
    });
    taskBtnDeleteDiv.appendChild(deleteImg);

    taskDiv.appendChild(taskNameDiv);
    taskDiv.appendChild(taskDateDiv);
    taskDiv.appendChild(taskBtnInfoDiv);
    taskDiv.appendChild(taskBtnDeleteDiv);

    return taskDiv;
}

// Loads lists in the sidebar
function loadLists() {
    const sidebarWrapper = document.querySelector(".sidebar-lists-wrapper");
    sidebarWrapper.innerHTML = "";

    const lists = JSON.parse(localStorage.getItem('lists')) || [];

    const allTasks = document.createElement("div");
    allTasks.className = "";
    allTasks.textContent = "All Tasks";
    allTasks.onclick = function () { loadAllTasks() };
    allTasks.className = "sidebar-item sidebar-all-tasks";
    sidebarWrapper.appendChild(allTasks);
    lists.forEach((item) => {
        const list = document.createElement("div");
        list.className = "sidebar-item sidebar-list";
        list.textContent = item;
        list.onclick = function () { loadList(item) };

        const deleteBtn = document.createElement("div");
        deleteBtn.className = "list-btn-delete";
        deleteBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            const listName = e.target.closest(".sidebar-item").textContent.trim();
            deleteList(listName);
        });

        const deleteImg = document.createElement("img");
        deleteImg.className = "list-icon-btn";
        deleteImg.src = "../imgs/delete-icon.png";
        deleteImg.alt = "delete button";

        deleteBtn.appendChild(deleteImg);
        list.appendChild(deleteBtn);
        sidebarWrapper.appendChild(list);
    });

}

// Loads a selected list
function loadList(listName) {
    // Renames the list title
    const mainListTitle = document.querySelector(".main-list-title");
    mainListTitle.textContent = listName;
    const taskListDiv = document.querySelector(".task-list");
    taskListDiv.innerHTML = "";

    const listTasks = JSON.parse(localStorage.getItem(listName)) || [];
    listTasks.forEach((task) => {
        const taskDiv = createTaskElement(task);
        taskListDiv.appendChild(taskDiv);
    });
}

// Adds a task to the current list
function submitTask() {
    const taskName = document.querySelector(".form-task-name").value.trim();
    const taskDescription = document.querySelector(".form-task-description").value.trim();
    const taskDate = document.querySelector(".form-task-date").value;
    const taskPriority = document.querySelector("input[name='priority']:checked").value;
    const list = document.querySelector(".main-list-title").textContent;
    const tasks = JSON.parse(localStorage.getItem(list)) || [];


    if (hasDuplicateName(tasks, taskName)) {
        alert("Error: Task name already exists!");
        return; // Prevent further execution if duplicate is found
    }

    const task = {
        name: taskName,
        description: taskDescription,
        date: taskDate,
        priority: taskPriority,
        listName: list
    };

    tasks.push(task);

    localStorage.setItem(list, JSON.stringify(tasks));

    modalAddTask.style.display = "none";
    if (list == "All Tasks") {
        loadAllTasks();
    } else {
        loadList(list);
    }
}

// Adds a list
function submitList() {
    const listName = document.querySelector(".form-list-name").value;
    const existingLists = JSON.parse(localStorage.getItem('lists')) || [];

    existingLists.push(listName);
    localStorage.setItem('lists', JSON.stringify(existingLists));

    modalAddList.style.display = "none";
    loadLists();
}

// MODALS JS

// Opens Add Task modal
addTaskBtn.addEventListener("click", (e) => {
    modalAddTask.show();
    modalAddTask.style.display = "flex";
    e.stopPropagation();
});

// Opens Add List Modal
addListBtn.addEventListener("click", (e) => {
    modalAddList.show();
    modalAddList.style.display = "flex";
    e.stopPropagation();
});

// Closes Modals
body.addEventListener("click", (e) => {
    if (modalAddList.open && !modalAddList.contains(e.target)) {
        modalAddList.style.display = "none";
    }
    if (modalAddTask.open && !modalAddTask.contains(e.target)) {
        modalAddTask.style.display = "none";
    }
    if (modalEditTask.open && !modalEditTask.contains(e.target)) {
        modalEditTask.style.display = "none";
    }
});

// Delete task
function deleteTask(taskName, listName) {
    const mainListTitle = document.querySelector(".main-list-title").textContent;
    let tasks = JSON.parse(localStorage.getItem(listName)) || [];
    tasks = tasks.filter(task => task.name !== taskName);
    localStorage.setItem(listName, JSON.stringify(tasks));
    if (mainListTitle == "All Tasks") {
        loadAllTasks();
    } else {
        loadList(mainListTitle);
    }
}

// Delete list
function deleteList(listName) {
    let lists = JSON.parse(localStorage.getItem('lists')) || [];
    lists = lists.filter(list => list !== listName);
    localStorage.setItem('lists', JSON.stringify(lists));
    localStorage.removeItem(listName); // Remove the list's tasks
    loadLists();
    loadAllTasks();
}

// Opens Edit Task Modal
function editTask(e, task) {
    modalEditTask.show();
    modalEditTask.style.display = "flex";
    e.stopPropagation();

    const taskName = document.querySelector(".form-edit-task-name");
    const taskDesc = document.querySelector(".form-edit-task-description");
    const taskDate = document.querySelector(".form-edit-task-date");

    const radioLow = document.querySelector(".radio-edit-low");
    const radioMedium = document.querySelector(".radio-edit-medium");
    const radioHigh = document.querySelector(".radio-edit-high");

    const originalTaskNameInput = document.querySelector("input[name='original-task-name']");
    originalTaskNameInput.value = task.name;

    const taskList = document.querySelector("input[name='task-list']");
    taskList.value = task.listName;

    taskName.value = task.name;
    taskDesc.value = task.description;
    taskDate.value = task.date;
    if (task.priority == "low") {
        radioLow.checked = true;
    } else if (task.priority == "medium") {
        radioMedium.checked = true;
    } else {
        radioHigh.checked = true;
    }
}

function submitEditedTask() {
    const taskName = document.querySelector(".form-edit-task-name").value.trim();
    const taskDescription = document.querySelector(".form-edit-task-description").value.trim();
    const taskDate = document.querySelector(".form-edit-task-date").value;
    const taskPriority = document.querySelector("input[name='priority-edit']:checked").value;
    const list = document.querySelector("input[name='task-list']").value;

    const editedTask = {
        name: taskName,
        description: taskDescription,
        date: taskDate,
        priority: taskPriority,
        listName: list
    };

    let tasks = JSON.parse(localStorage.getItem(list)) || [];
    const originalTaskName = document.querySelector("input[name='original-task-name']").value;

    // Check for duplicates excluding the original name
    if (hasDuplicateName(tasks.filter(task => task.name !== originalTaskName), taskName)) {
        alert("Error: Task name already exists!");
        return; // Prevent update if duplicate is found
    }

    const taskIndex = tasks.findIndex(task => task.name === originalTaskName);

    if (taskIndex > -1) {
        tasks[taskIndex] = editedTask;
        localStorage.setItem(list, JSON.stringify(tasks));
    }

    modalEditTask.style.display = "none";
    if (list === "All Tasks") {
        loadAllTasks();
    } else {
        loadList(list);
    }
}

function hasDuplicateName(tasks, name) {
    return tasks.some(task => task.name.toLowerCase() === name.toLowerCase()); // Case-insensitive check
}

});