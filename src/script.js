const addTaskBtn = document.getElementById("btn-add-task");
const modalAddTask = document.getElementById("modal-add-task");
const submitTaskBtn = document.getElementById("btn-submit-task");
const addTaskForm = document.getElementById("add-task-form");

const addListBtn = document.getElementById("btn-add-list");
const modalAddList = document.getElementById("modal-add-list");
const submitListBtn = document.getElementById("btn-submit-list");
const addListForm = document.getElementById("add-list-form");

const body = document.body;

//  Opens Add Task modal
addTaskBtn.addEventListener("click", (e) => {
    modalAddTask.show();
    modalAddTask.style.display = "flex";
    e.stopPropagation();
});

//  Closes Add Task modal
body.addEventListener("click", (e) => {
    if(modalAddTask.open && !modalAddTask.contains(e.target)) {      
        modalAddTask.style.display = "none";
    }
});

// Adds a task to the current list
submitTaskBtn.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const taskName = document.querySelector(".form-task-name");
    const taskDescription = document.querySelector(".form-task-description");
    const taskDate = document.querySelector(".form-task-date");
    const taskPriority = document.querySelector("input[name='priority']:checked").value;

    localStorage.setItem()
});

// Opens Add List Modal
addListBtn.addEventListener("click", (e) => {
    modalAddList.show();
    modalAddList.style.display = "flex";
    e.stopPropagation();
});

// Closes Add List Modal
body.addEventListener("click", (e) => {
    if(modalAddList.open && !modalAddList.contains(e.target)) {      
        modalAddList.style.display = "none";
    }
});

// Adds a list
submitListBtn.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const listName = document.querySelector(".form-list-name");
    
    localStorage.setItem()
});