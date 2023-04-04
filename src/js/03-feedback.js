import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const email = document.querySelector('input');
const message = document.querySelector('textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 400));

const data = {};
addTextArea();

function onFormInput(evt) {
    data[evt.target.name] = evt.target.value;
    
    localStorage.setItem("feedback-form-state", JSON.stringify(data))
}

function onFormSubmit(evt) {
    evt.preventDefault();
console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    evt.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
}

function addTextArea() {
    const saveText = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (saveText) {
        email.value = saveText.email;
        message.value = saveText.message;
    }
}