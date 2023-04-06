import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 400));

let data = JSON.parse(localStorage.getItem(KEY)) || {};
const { email, message } = form.elements;
addTextArea();
function onFormInput(evt) {
  data = { email: email.value, message: message.value };
  localStorage.setItem(KEY, JSON.stringify(data));
}
function addTextArea() {

  if (data) {
    email.value = data.email || '';
    message.value = data.message || '';
  }
}
function onFormSubmit(evt) {
  evt.preventDefault();

  if (!email.value || !message.value) {
    return alert('Заповніть усі поля!');
  }
  console.log(data);
  localStorage.removeItem(KEY);
  evt.currentTarget.reset();
  data = {};
}

// ---------------------------------------------------
// const form = document.querySelector(".feedback-form");

// form.addEventListener('submit', onFormSubmit);
// form.addEventListener('input', throttle(onFormInput, 400));

// let data = JSON.parse(localStorage.getItem('feedback-form-state'))|| {};
// const { email, message } = form.elements;
// addTextArea();


// function onFormInput(evt) {
//      data = { email: email.value, message: message.value };
//     localStorage.setItem("feedback-form-state", JSON.stringify(data))
// }

// function onFormSubmit(evt) {
//     evt.preventDefault();
    
//     if (!email.value || !message.value) {
//      return alert('Заповніть усі поля!');
//     }
//     console.log(JSON.parse(localStorage.getItem("feedback-form-state"))|| {});
//     localStorage.removeItem('feedback-form-state');
//     evt.currentTarget.reset();
//     data = {};
    
// }

// function addTextArea() {
    
//     if (data) {
//         email.value = data.email || '';
//         message.value = data.message || '';
//     }
    
// }


