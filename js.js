let toDoList = [];

const search = document.querySelector('input.search');
const inputAdd = document.querySelector('input.addInput')
const buttonAdd= document.querySelector('button.add');
let taskCounter = document.querySelector('h3 span');
const removeTask = document.querySelector('li button.delete');
const editTask = document.querySelector('li button.edit')
const defaultInput = document.querySelector('input');
const form = document.querySelector('form');
const li = document.querySelectorAll('li')
const buttonEdit = document.querySelector('button.edit_me');
const editInpput = document.querySelector('input.editInput')


taskCounter.innerHTML = toDoList.length;

//delating each clicked task from UL element
const rmvTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index,1)
    taskCounter.textContent = toDoList.length;
    console.log("ss")
}

//editing each clicked task from UL element
const editingTask = (e) => {
    buttonEdit.style.display = 'inline';
    editInpput.style.display = 'inline'
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index,1)
    taskCounter.textContent = toDoList.length;
    console.log("ssggg")
}

//Search program, looking for any match world or chain letters matched from LI elements
const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    console.log(toDoList)
     toDoList.filter(li => li.textContent.toLowerCase().includes(searchText));
     console.log(toDoList)
    };

    //Checking validation, input have to be clicked and must have a value inside, otherwise program return alert
 const addElement = (e) => {
     if (inputAdd.value === "Dodaj nowy Task do zrobienia" || inputAdd.value == "") {
         event.preventDefault();
         return alert ("Dodaj zadanie")
     
     }else {
    e.preventDefault();
    //
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    
    // Adding Remove Button to LI element
    const removeButton = document.createElement('button');
    removeButton.innerHTML = "usun";
    removeButton.classList.add("delate")
    
    // UL > LI > edit button add dynamic 
    const editButton = document.createElement('button')
    editButton.innerHTML = "edytuj";
    editButton.classList.add("edit")
    
    document.getElementsByClassName("toDoBody")[0].appendChild(ul);
    li.innerHTML = inputAdd.value;
    let task = inputAdd.value;
    ul.appendChild(li)
    
    // Dynamic button created by program
    li.appendChild(removeButton)
    li.appendChild(editButton)

    // Input reset
    inputAdd.value = "Dodaj nowy Task do zrobienia";

    // 
    toDoList.push(task);
    taskCounter.textContent = toDoList.length;

    //
    li.querySelector("button.delate").addEventListener('click', rmvTask);
     }
 }


editTask.addEventListener('click', editingTask);
buttonAdd.addEventListener('click', addElement);
search.addEventListener("input", searchTask)
