import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const KEY = 'feedback-form-state';
// const email = document.querySelector('input');
// const message = document.querySelector('textarea');
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 400));
// const data = {};
let data = JSON.parse(localStorage.getItem(KEY)) || {};
const { email, message } = form.elements;
addTextArea();
function onFormInput(evt) {
  // data[evt.target.name] = evt.target.value;
  data = { email: email.value, message: message.value };
  localStorage.setItem(KEY, JSON.stringify(data));
}
function addTextArea() {
  // const saveText = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (data) {
    email.value = data.email || '';
    message.value = data.message || '';
  }
}
function onFormSubmit(evt) {
  evt.preventDefault();
  // const { email, message } = form.elements;
  if (!email.value || !message.value) {
    return alert('Заповніть усі поля!');
    //   return;
  }
  // console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
  localStorage.removeItem(KEY);
  evt.currentTarget.reset();
  data = {};
}

// ---------------------------------------------------
// const form = document.querySelector(".feedback-form");
// const email = document.querySelector('input');
// const message = document.querySelector('textarea');

// form.addEventListener('submit', onFormSubmit);
// form.addEventListener('input', throttle(onFormInput, 400));

// const data = { email: '', message: '' };
// const saveText = JSON.parse(localStorage.getItem('feedback-form-state'));
// addTextArea();

// function onFormInput(evt) {
//     data[evt.target.name] = evt.target.value;
    
//     localStorage.setItem("feedback-form-state", JSON.stringify(data))
// }

// function onFormSubmit(evt) {
//     evt.preventDefault();
//     const { email, message } = form.elements;
//     if (!email.value || !message.value) {
//       alert('Заповніть усі поля!');
//       return;
//     }
//     console.log(JSON.parse(localStorage.getItem("feedback-form-state"))|| {});
//     localStorage.removeItem('feedback-form-state');
//     evt.currentTarget.reset();
    
// }

// function addTextArea() {
    
//     if (saveText) {
//         email.value = saveText.email || '';
//         message.value = saveText.message || '';
//     }
    
// }


