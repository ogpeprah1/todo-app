const addItemBtn = document.getElementById('addTodo');
const inputItem = document.getElementById('inputField');
const todo_container = document.getElementById('todo-container');

addItemBtn.onclick = () => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item'); const todoItem_sub_container = document.createElement('div')
    //todoItem_sub_container.classList.add('todo-item__subContainer')
    
    const checkIfComplete = document.createElement('input')
    checkIfComplete.type = 'checkbox'

    checkIfComplete.onclick = () => {
        checkIfComplete.parentNode.remove()
        updateLocalStorage()
        editLocalStorage()
    }



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

    const editBtn = document.createElement('button')
    editBtn.innerText = 'Edit';
    editBtn.classList.add('edit-btn')

    editBtn.onclick = () => {
        inputItem.value = todoText.innerText
        addItemBtn.innerText = 'save'

        addItemBtn.onclick = () => {
            todoText.innerText = inputItem.value
            todoItem.appendChild(container_delete_edit)
            inputItem.value = ''
            addItemBtn.innerText = '+'
            editLocalStorage();
        }
    }


    //creating a delete and edit button div
    const container_delete_edit = document.createElement('div')
    container_delete_edit.classList.add('container_delete_edit')

    container_delete_edit.appendChild(deleteBtn);
    container_delete_edit.appendChild(editBtn)



    //appending the element to the containers
    todoItem.appendChild(checkIfComplete)
    todoItem.appendChild(todoText);
    todoItem.appendChild(container_delete_edit)
    
    //appending todoItem to the todo_container
    todo_container.appendChild(todoItem);

    inputItem.value = ''; // Clear the input field after adding the todo


    updateLocalStorage();
    editLocalStorage()
};



window.addEventListener("load", function() {
    let notes = localStorage.getItem("InputRecords");

    if (notes) {
        todo_container.innerHTML = notes;

        const deleteParent = document.getElementsByClassName('delete-btn');
        for (let i = 0; i < deleteParent.length; i++) {
            deleteParent[i].addEventListener('click', () => {
                deleteParent[i].parentNode.parentNode.remove();
                updateLocalStorage();
            });
        }

        const editParent = document.getElementsByClassName('edit-btn');
        for (let i = 0; i < editParent.length; i++) {
            editParent[i].addEventListener('click', () => {
                const ParentContainer = editParent[i].parentNode
                const Container_parentContainer = ParentContainer.parentNode
                const firstChild = Container_parentContainer.firstChild.nextSibling
                
                inputItem.value =  firstChild.innerText
                addItemBtn.innerText = 'save'

                addItemBtn.onclick = () => {
                    firstChild.innerText = inputItem.value
                    Container_parentContainer.appendChild(ParentContainer)
                    inputItem.value = ''
                    addItemBtn.innerText = '+'
                    editLocalStorage()
                }                
            });
        }

        const checkParent = document.querySelector(`input:type['checkbox']`)
       console.log(checkParent);
    }
});


function updateLocalStorage() {
    localStorage.setItem("InputRecords", todo_container.innerHTML);
}

function editLocalStorage(){
    localStorage.setItem('InputRecords', todo_container.innerHTML)
}


// Clear local storage and the todo_container div
const clearList = document.getElementById('clear-all');
clearList.onclick = function () {
    localStorage.removeItem('InputRecords');
    todo_container.innerHTML = '';
};
