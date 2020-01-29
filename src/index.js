document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let submitForm = document.getElementById("create-task-form")

  submitForm.addEventListener('submit', submitHandler)

});

function submitHandler(event) {
  event.preventDefault()
  let userInput = document.getElementById("new-task-description").value 
  event.target.reset()
  
  addTask(userInput)
  // add task function
}

function getTasks() {
  return document.getElementById("tasks")
}

function addTask(userInput){ 

  let task = getTasks()
  let newTask = makeNewTask(userInput)
 task.appendChild(newTask)
}


function makeNewTask(userInput) { 
  
  let newLi = document.createElement("li")
  // let newTask = document.getElementById("new-task-description").value 
  //  let x = document.createTextNode(userInput)
   newLi.innerText = userInput
  
  return newLi
}