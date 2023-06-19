const addItemBtn = document.getElementById('addTodo');
const inputItem = document.getElementById('inputField');
const todo_container = document.getElementById('todo-container');
const sub_sub_container = document.getElementById('sub-sub-container');

addItemBtn.onclick = () => {

    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    const todoText = document.createElement('p');
    todoItem.classList.add('todo-text')
    todoText.innerText = inputItem.value;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        todoItem.remove();
    });

    if(inputItem.value == ''){
        removeEventListener();
    }

    // sub_sub_container.style.display = 'none';

    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteBtn);

    todo_container.appendChild(todoItem);

    
    inputItem.value = ''; // Clear the input field after adding the todo

    updateDivState();
};

window.addEventListener("load", function() {
  let notes = localStorage.getItem("InputRecords");
  if(notes){
    todo_container.innerHTML = notes;
  }
  
});

function updateDivState() {
  localStorage.setItem("InputRecords", todo_container.innerHTML);
}


//clear localstorage
const clearList = document.getElementById('clear-all')

clearList.onclick = function(){
    localStorage.clear();
}