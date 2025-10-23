const input = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Create task element
function createTaskElement(taskText) {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);

    // Done button
    const doneBtn = document.createElement('button');
    doneBtn.textContent = '✅';
    doneBtn.className = 'done';
    doneBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
    });
    li.appendChild(doneBtn);

    // Edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = '✏️';
    editBtn.className = 'edit';
    editBtn.addEventListener('click', () => {
        const newText = prompt('Edit task:', span.textContent);
        if (newText !== null && newText.trim() !== '') {
            span.textContent = newText.trim();
        }
    });
    li.appendChild(editBtn);

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.className = 'delete';
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });
    li.appendChild(deleteBtn);

    return li;
}

// Add task
function addTask() {
    const taskText = input.value.trim();
    if (taskText !== '') {
        const taskElement = createTaskElement(taskText);
        taskList.appendChild(taskElement);
        input.value = '';
        input.focus();
    }
}

// Add task via button
addTaskBtn.addEventListener('click', addTask);

// Add task via Enter key
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
