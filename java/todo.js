const inputtdl = document.querySelector('.textarea')
const buttontdl = document.querySelector('.buttoninput')
const listtdl = document.querySelector('.todolist')

// Load todos from localStorage on page load
function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo => {
        createTodoElement(todo.text, todo.completed)
    })
}

// Save todos to localStorage
function saveTodos() {
    const todoItems = document.querySelectorAll('.itemall')
    const todos = []
    todoItems.forEach(item => {
        todos.push({
            text: item.querySelector('.item').innerText,
            completed: item.classList.contains('checklist')
        })
    })
    localStorage.setItem('todos', JSON.stringify(todos))
}

function clickButton(e) {
    e.preventDefault()
    addTodo()
}

// Create a todo element
function createTodoElement(text, completed = false) {
    const itemall = document.createElement('div')
    itemall.classList.add('itemall')
    if (completed) {
        itemall.classList.add('checklist')
    }

    const item = document.createElement('p')
    item.classList.add('item')
    item.innerText = text
    itemall.appendChild(item)

    const checkbutton = document.createElement("button")
    checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>'
    checkbutton.classList.add("check-button")
    itemall.appendChild(checkbutton)

    const trashbutton = document.createElement("button")
    trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trashbutton.classList.add("trash-button")
    itemall.appendChild(trashbutton)

    listtdl.appendChild(itemall)
}

// adding todoList
function addTodo() {
    if (inputtdl.value === '') return

    createTodoElement(inputtdl.value)
    inputtdl.value = ''
    saveTodos()
}

// checking and delete todoList
function okdel(e) {
    const item = e.target

    // check
    if (item.classList[0] === 'check-button') {
        const todolist = item.parentElement
        todolist.classList.toggle('checklist')
        saveTodos()
    }

    // delete
    if (item.classList[0] === 'trash-button') {
        const todolist = item.parentElement
        todolist.remove()
        saveTodos()
    }
}

buttontdl.addEventListener('click', clickButton)
listtdl.addEventListener('click', okdel)

// Load saved todos when page loads
loadTodos()
