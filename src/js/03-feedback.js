import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');

const emailEl = document.querySelector('[name ="email"]');

const textareaEl = document.querySelector('[name ="message"]');

const STORAGE_KEY = 'feedback-form-state';

populateForm();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

let userStorage = {};

function onFormInput() {
    const formData = {
      emailEl: emailEl.value,
      textareaEl: textareaEl.value,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
}

function onFormSubmit(e) {
    e.preventDefault();
    if (emailEl.value === '' || textareaEl.value === '') {
      return alert(
        'Всі поля мають бути заповнені!!!'
      );
    }
  
    const saveLocalStorage = localStorage.getItem(STORAGE_KEY);
    const objectFromLocalStorage = JSON.parse(saveLocalStorage);
    console.log(objectFromLocalStorage);
  
    localStorage.removeItem(STORAGE_KEY);
    e.currentTarget.reset();
  }
  
  function populateForm() {
    const saveLocalStorage = localStorage.getItem(STORAGE_KEY);
    const objectFromLocalStorage = JSON.parse(saveLocalStorage);
    if (objectFromLocalStorage) {
      emailEl.value = objectFromLocalStorage.emailEl;
      textareaEl.value = objectFromLocalStorage.textareaEl;
    }
  }
  