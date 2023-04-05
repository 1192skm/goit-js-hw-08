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
    const { email, message } = form.elements;
    if (!email.value || !message.value) {
      alert('Заповніть усі поля!');
      return;
    }
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    localStorage.removeItem('feedback-form-state');
    evt.currentTarget.reset();
    
}

function addTextArea() {
    const saveText = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (saveText) {
        email.value = saveText.email || '';
        message.value = saveText.message || '';
    }
    
}