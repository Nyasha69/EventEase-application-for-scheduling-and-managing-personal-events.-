const inputtdl = document.querySelector('.textarea');
const buttontdl = document.querySelector('.buttoninput');
const listtdl = document.querySelector('.todolist');

// Load todos from localStorage on page load
loadTodos();

function clickButton(e) {
    e.preventDefault();
    addTodo();
}

// Adding todoList
function addTodo(text = '', checked = false) {
    if (text === '' && inputtdl.value === '') return;

    const todoText = text || inputtdl.value;

    const itemall = document.createElement('div');
    itemall.classList.add('itemall');
    if (checked) {
        itemall.classList.add('checklist');
    }

    const item = document.createElement('p');
    item.classList.add('item');
    item.textContent = todoText;
    itemall.appendChild(item);

    const checkbutton = document.createElement("button");
    checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkbutton.classList.add("check-button");
    itemall.appendChild(checkbutton);

    const trashbutton = document.createElement("button");
    trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashbutton.classList.add("trash-button");
    itemall.appendChild(trashbutton);

    listtdl.appendChild(itemall);

    // Clear input only if adding from input
    if (!text) {
        inputtdl.value = '';
        saveTodos();
    }
}

// Checking and delete todoList 
function okdel(e) {
    const item = e.target;

    // Check
    if (item.classList.contains('check-button')) {
        const todolist = item.parentElement;
        todolist.classList.toggle('checklist');
        saveTodos();
    }

    // Delete
    if (item.classList.contains('trash-button')) {
        const todolist = item.parentElement;
        todolist.remove();
        saveTodos();
    }
}

// Save todos to localStorage
function saveTodos() {
    const todoItems = document.querySelectorAll('.itemall');
    const todos = [];

    todoItems.forEach(item => {
        todos.push({
            text: item.querySelector('.item').textContent,
            checked: item.classList.contains('checklist')
        });
    });

    localStorage.setItem('todos', JSON.stringify(todos));
}

// Load todos from localStorage
function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos'));

    if (todos) {
        todos.forEach(todo => addTodo(todo.text, todo.checked));
    }
}

buttontdl.addEventListener('click', clickButton);
listtdl.addEventListener('click', okdel);

// Allow Enter key to add todo
inputtdl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        addTodo();
    }
});