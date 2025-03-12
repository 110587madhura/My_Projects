document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input')
const addTaskButton = document.getElementById('add-task-btn')
const todoList = document.getElementById('todo-list')

// let tasks = []  // initialed like this 
let tasks = JSON.parse(localStorage.getItem('tasks')) || []

// if tasks are present loop it 
tasks.forEach((task) => rendertask(task));

addTaskButton.addEventListener('click', function() {
   const taskText = todoInput.value.trim()
   if(taskText === "") return  // without text if we click on add task button is return nothing 
   const newTask = {  // adding a new task
    id : Date.now(),
    text : taskText,
    completed : false
   }
   tasks.push(newTask)
   saveTasks()   // call the localstorage function here
   rendertask(newTask)
   todoInput.value = ""  // clearing the input
   console.log(tasks)
});

        function rendertask(task) {
            //console.log(task)
        const li = document.createElement('li')
        li.setAttribute('data-id', task.id)
        if(task.completed) li.classList.add('completed')
        li.innerHTML = `<span> ${task.text}</span> 
        <button style="background-color: red; color: white; margin:2px">delete</button>`

        

li.addEventListener('click', (e) => {
    if(e.target.tagName === "BUTTON") return;
    task.completed = !task.completed
    li.classList.toggle('completed')
    saveTasks()
})
li.querySelector('button').addEventListener('click', (e)=> {
    e.stopPropagation()    // prevent toggle event from firing
    tasks = tasks.filter((t) => {t.id !== task.id})
    li.remove()
    saveTasks()
})
        todoList.appendChild(li)
    }

    // to save the created task in localstorage :
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    
})