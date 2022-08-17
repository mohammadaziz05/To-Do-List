//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Events
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",checkDelete);



//Functions
function addTodo(event){
    event.preventDefault();
    

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText =todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //Complete

    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);


    //Delete

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class = "fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);

    //Adding

    todoList.appendChild(todoDiv);  
    
    todoInput.value="";

}


function checkDelete(e){
    const item = e.target;


    if (item.classList[0] === "delete-btn"){
        const todo = item.parentElement;
        todo.remove();
    }  
    else{
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}
