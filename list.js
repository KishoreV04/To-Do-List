const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.onclick = function() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function() {
            taskList.removeChild(listItem);
        };

        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);
        taskInput.value = ''; 
    }
};