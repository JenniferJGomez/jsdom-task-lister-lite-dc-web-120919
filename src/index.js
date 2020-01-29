document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let submitForm = document.getElementById("create-task-form")

  submitForm.addEventListener('submit', submitHandler)

});

function submitHandler(event) {
  event.preventDefault()
  let newTask = document.getElementById("new-task-description").value 
  event.target.reset()
  // add task function
}

function getTasks() {
  return document.getElementById("tasks")
}