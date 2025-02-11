document.addEventListener('DOMContentLod', loadTask());
function loadTask(){
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []
    
    tasks.forEach(task =>addTaskToDOM(task));
}





function addTask(){
    let textInput =document.getElementById('taskInput');
    let taskText = textInput.value;
    

    // DOM save

    
    addTaskToDOM(taskText)

 // Local Storage save
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    textInput.value = "";




}
function addTaskToDOM(taskText){
    let ul =document.getElementById('taskList');
    let li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span> 
        <span>
        <span class= "btn btn-info" onclick="editText(this)">Edit</span>
        <span class=" delete btn btn-danger" onclick="deleteTask(this)" >Delete</span>
        </span>

    `
    ul.appendChild(li)

}

function deleteTask(element) {
    let li =element.parentElement.parentElement;
    let taskText = li.firstElementChild.innerText;
    li.remove()

    let tasks =JSON.parse(localStorage.getItem("tasks")) || []
    tasks =tasks.filter(task => task!==taskText)
    localStorage.setItem("tasks", JSON.stringify(tasks))
    location.reload();

}

function editText(element) {
    let li =element.parentElement.parentElement;
    let taskText = li.firstElementChild.innerText;
    let userInput = window.prompt("Update Task")
    li.firstElementChild.innerText = userInput;
    let tasks =JSON.parse(localStorage.getItem("tasks")) || []
    tasks.forEach((task, index) => {
        if (task == taskText ){
            console.log(task, taskText)
            tasks[index] = userInput
        }
    })
    localStorage.setItem("tasks", JSON.stringify(tasks))
    // document.addEventListener('DOMContentLod', loadTask());
    location.reload();


}