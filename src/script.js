const addTaskBtn = document.getElementById("btn-add-task");
const modalAddTask = document.getElementById("modal-add-task");
const submitTaskBtn = document.getElementById("btn-submit-task");
const addTaskForm = document.getElementById("add-task-form");

const addListBtn = document.getElementById("btn-add-list");
const modalAddList = document.getElementById("modal-add-list");
const submitListBtn = document.getElementById("btn-submit-list");
const addListForm = document.getElementById("add-list-form");

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
        createTaskDiv(taskListDiv, task);
    });

    // Load tasks from all other lists
    const lists = JSON.parse(localStorage.getItem('lists')) || [];
    lists.forEach((item) => {
        const tasks = JSON.parse(localStorage.getItem(item));
        if (tasks != null) {
            tasks.forEach((task) => {
                createTaskDiv(taskListDiv, task);
            });
        }
    });
}

// Creates a task div
function createTaskDiv(taskListDiv, task) {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

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
    infoImg.src = "../imgs/info-icon.png";
    infoImg.alt = "info button";
    taskBtnInfoDiv.appendChild(infoImg);

    const taskBtnDeleteDiv = document.createElement("div");
    taskBtnDeleteDiv.className = "task-btn-delete";
    const deleteImg = document.createElement("img");
    deleteImg.className = "icon-btn";
    deleteImg.src = "../imgs/delete-icon.png";
    deleteImg.alt = "delete button";
    taskBtnDeleteDiv.appendChild(deleteImg);

    taskDiv.appendChild(taskNameDiv);
    taskDiv.appendChild(taskDateDiv);
    taskDiv.appendChild(taskBtnInfoDiv);
    taskDiv.appendChild(taskBtnDeleteDiv);

    taskListDiv.appendChild(taskDiv);
}

// Loads lists in the sidebar
function loadLists() {
    const sidebarWrapper = document.querySelector(".sidebar-lists-wrapper");
    sidebarWrapper.innerHTML = "";
    
    const lists = JSON.parse(localStorage.getItem('lists')) || [];
    
    const allTasks = document.createElement("div");
    allTasks.className = "";
    allTasks.textContent = "All Tasks";
    allTasks.onclick = function() { loadAllTasks() };
    allTasks.className = "sidebar-item sidebar-all-tasks";
    sidebarWrapper.appendChild(allTasks);

    lists.forEach((item) => {
        const list = document.createElement("div");
        list.className = 'sidebar-item sidebar-list';
        list.textContent = item;
        list.onclick = function() { loadList(item) };
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
        const taskDiv = document.createElement("div");
        taskDiv.className = "task";

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
        infoImg.src = "../imgs/info-icon.png";
        infoImg.alt = "info button";
        taskBtnInfoDiv.appendChild(infoImg);

        const taskBtnDeleteDiv = document.createElement("div");
        taskBtnDeleteDiv.className = "task-btn-delete";
        const deleteImg = document.createElement("img");
        deleteImg.className = "icon-btn";
        deleteImg.src = "../imgs/delete-icon.png";
        deleteImg.alt = "delete button";
        taskBtnDeleteDiv.appendChild(deleteImg);

        taskDiv.appendChild(taskNameDiv);
        taskDiv.appendChild(taskDateDiv);
        taskDiv.appendChild(taskBtnInfoDiv);
        taskDiv.appendChild(taskBtnDeleteDiv);

        taskListDiv.appendChild(taskDiv);
    });
};

// Adds a task to the current list
function submitTask() {
    const taskName = document.querySelector(".form-task-name").value.trim();
    const taskDescription = document.querySelector(".form-task-description").value.trim();
    const taskDate = document.querySelector(".form-task-date").value;
    const taskPriority = document.querySelector("input[name='priority']:checked").value;

    const task = {
        name: taskName,
        description: taskDescription,
        date: taskDate,
        priority: taskPriority
    };

    const list = document.querySelector(".main-list-title").textContent;
    let tasks = JSON.parse(localStorage.getItem(list)) || [];
    tasks.push(task);

    localStorage.setItem(list, JSON.stringify(tasks));

    modalAddTask.style.display = "none";
    loadList(list);
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

// Closes Add Task modal
body.addEventListener("click", (e) => {
    if (modalAddTask.open && !modalAddTask.contains(e.target)) {
        modalAddTask.style.display = "none";
    }
});

// Opens Add List Modal
addListBtn.addEventListener("click", (e) => {
    modalAddList.show();
    modalAddList.style.display = "flex";
    e.stopPropagation();
});

// Closes Add List Modal
body.addEventListener("click", (e) => {
    if (modalAddList.open && !modalAddList.contains(e.target)) {
        modalAddList.style.display = "none";
    }
});