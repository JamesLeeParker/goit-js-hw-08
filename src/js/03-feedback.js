const throttle = require('lodash.throttle');
const formRef = document.querySelector('.feedback-form');

const addLocalStorage = e => {
  e.preventDefault();
  const { email, message } = formRef.elements;

  const obj = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(obj));
};

formRef.addEventListener('input', throttle(addLocalStorage, 250));

const getData = localStorage.getItem('feedback-form-state');

if (getData) {
  const data = JSON.parse(getData);
  const { email, message } = formRef.elements;
  email.value = data.email;
  message.value = data.message;
}

formRef.addEventListener('submit', e => {
  localStorage.removeItem('feedback-form-state');
});
