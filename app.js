const addItemBtn = document.getElementById('addTodo');
const inputItem = document.getElementById('inputField');
const todo_container = document.getElementById('todo-container');
const sub_sub_container = document.getElementById('sub-sub-container');

addItemBtn.onclick = () => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    const todoText = document.createElement('p');
    todoText.classList.add('todo-text');
    todoText.innerText = inputItem.value;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        todoItem.remove();
        updateLocalStorage();
    });

    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteBtn);

    todo_container.appendChild(todoItem);

    inputItem.value = ''; // Clear the input field after adding the todo

    updateLocalStorage();
};

window.addEventListener("load", function() {
    let notes = localStorage.getItem("InputRecords");
    if (notes) {
        todo_container.innerHTML = notes;
        const deleteButtons = document.getElementsByClassName('delete-btn');
        for (let i = 0; i < deleteButtons.length; i++) {
            deleteButtons[i].addEventListener('click', () => {
                deleteButtons[i].parentNode.remove();
                updateLocalStorage();
            });
        }
    }
});

function updateLocalStorage() {
    localStorage.setItem("InputRecords", todo_container.innerHTML);
}

// Clear local storage and the todo_container div
const clearList = document.getElementById('clear-all');
clearList.onclick = function () {
    localStorage.removeItem('InputRecords');
    todo_container.innerHTML = '';
};
