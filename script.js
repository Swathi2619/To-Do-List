const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Render tasks from localStorage
function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';

    li.innerHTML = `
      <span onclick="toggleTask(${index})">${task.text}</span>
      <div class="actions">
        <button onclick="editTask(${index})">✏️</button>
        <button onclick="deleteTask(${index})">🗑️</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

// Add new task
addBtn.addEventListener('click', () => {
  const text = taskInput.value.trim();
  if (text === '') {
    alert('Please enter a task!');
    return;
  }

  tasks.push({ text, completed: false });
  taskInput.value = '';
  saveAndRender();
});

// Toggle completed
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveAndRender();
}

// Edit task
function editTask(index) {
  const newText = prompt('Edit task:', tasks[index].text);
  if (newText !== null && newText.trim() !== '') {
    tasks[index].text = newText.trim();
    saveAndRender();
  }
}

// Delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  saveAndRender();
}

// Save to localStorage
function saveAndRender() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

renderTasks();
