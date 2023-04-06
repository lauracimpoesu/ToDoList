var tasksGroup = []
var i
var buttonOne
var nameValue
var tasksListHTML
var myContentDisplay
var myPara
window.addEventListener("load", startProgram)

function startProgram() {
  buttonOne = document.querySelector("#myButtonOne")
  nameValue = document.querySelector("#myNameValue")
  tasksListHTML = document.querySelector("#myHTMLtasksList")

  buttonCall()
}

function buttonCall() {
  buttonOne.addEventListener("click", putTask, p)
}

function putTask() {
  tasksGroup.push(nameValue.value)
  createDisplayMagic()
  p()
}

function deleteTask(id) {
  tasksGroup.pop(id, 1)
  createDisplayMagic()
}

function createDisplayMagic() {
  myContentDisplay = ""
  for (i = 0; i < tasksGroup.length; i++) {
    myContentDisplay +=
      "<li class='list-group-item' id='text'>" +
      tasksGroup[i] +
      "<p onclick='deleteTask(" +
      i +
      ")' class='deleteButtonOne badge text-secondary'>undo</p></li>"
  }
  tasksListHTML.innerHTML = myContentDisplay
}

function p() {
  for (i = 0; i < tasksGroup.length; i++) {
    myPara = document.querySelector("#myPara")
    myPara.innerText = tasksGroup.length
  }
}
