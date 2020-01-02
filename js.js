let toDoList = [];
const inputAdd = document.querySelector('input.addInput')
const buttonAdd= document.querySelector('button.add');
let taskCounter = document.querySelector('h3 span');
const removeTask = document.querySelector('li button.delete');
const defaultInput = document.querySelector('input');
const form = document.querySelector('form');
const li = document.querySelectorAll('li')




taskCounter.innerHTML = toDoList.length;

//delating each clicked task from UL element
const rmvTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index,1)
    taskCounter.textContent = toDoList.length;
    console.log("ss")
}

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

    
    document.getElementsByClassName("toDoBody")[0].appendChild(ul);
    li.innerHTML = inputAdd.value;
    let task = inputAdd.value;
    ul.appendChild(li)
    
    // Dynamic button created by program
    li.appendChild(removeButton)


    // Input reset
    inputAdd.value = "Dodaj nowy Task do zrobienia";

    toDoList.push(task);
    taskCounter.textContent = toDoList.length;

    //
    li.querySelector("button.delate").addEventListener('click', rmvTask);
     }
 }


buttonAdd.addEventListener('click', addElement);
