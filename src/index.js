document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let submitForm = document.getElementById("create-task-form")

  submitForm.addEventListener('submit', submitHandler)

});

function submitHandler(event) {
  event.preventDefault()
  let userInput = document.getElementById("new-task-description").value
  event.target.reset()

  let liTask = addTask(userInput)
  addButton(liTask)
}

function getTasks() {
  return document.getElementById("tasks")
}

function addTask(userInput){
  let task = getTasks()
  let newTask = makeNewTask(userInput)
 task.appendChild(newTask)
 return task
}



function makeNewTask(userInput) {

  let newLi = document.createElement("li")
  let button = document.createElement("button")

  // let newTask = document.getElementById("new-task-description").value
  //  let x = document.createTextNode(userInput)
   newLi.innerText = userInput

  return newLi
}

function addButton(liTask) {
    let span = document.createElement('SPAN')
    let text = document.createTextNode('\u00D7')
    span.appendChild(text)
    liTask.appendChild(span)
  }
