document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerText = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.addEventListener('click', deleteTask);

        li.addEventListener('click', toggleComplete);

        li.appendChild(deleteBtn);
        document.getElementById('taskList').appendChild(li);

        taskInput.value = '';
    }
}

function deleteTask(event) {
    const taskItem = event.target.parentElement;
    taskItem.remove();
}

function toggleComplete(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    }
}
