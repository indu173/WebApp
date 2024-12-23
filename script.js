// Select elements
const addButton = document.getElementById('addButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    // Add event listener for the delete button
    const deleteButton = li.querySelector('.delete-btn');
    deleteButton.addEventListener('click', () => {
        li.remove();
    });

    // Add event listener to toggle completed tasks
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Append the new task to the list
    taskList.appendChild(li);

    // Clear the input field after adding the task
    taskInput.value = '';
}

// Add task when button is clicked
addButton.addEventListener('click', addTask);

// Add task when "Enter" key is pressed
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
