const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h3 span');
const listItem = document.querySelectorAll('li');

const inputSearch = document.querySelector('input.Search');
const inputAdd = document.querySelector('input.typeElement');

const addTask = (e) => {
    e.preventDefault();
    const titleTask = inputAdd.value;

}

inputAdd.addEventListener('input', addTask)

