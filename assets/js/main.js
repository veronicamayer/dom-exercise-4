const submitButton = document.querySelector('input[type=submit]');
const textInput = document.querySelector('input[type=text]');
const list = document.querySelector('ul');

submitButton.addEventListener('click', addListItem);
textInput.addEventListener('keydown', event => {
    (event.key === 'Enter') ? addListItem() : "";
});

function addListItem() {
    const listItem = document.createElement('li');
    listItem.textContent = textInput.value;
    list.appendChild(listItem);
    textInput.value = '';
}


