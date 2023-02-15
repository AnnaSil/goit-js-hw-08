import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea')
}

const LOCAL_KEY = 'feedback-form-state'
const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

populateTextArea()

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(LOCAL_KEY);
}

function onTextareaInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(formData))
    console.log(formData);
}

function populateTextArea() {
    const savedMessage = JSON.parse(localStorage.getItem(LOCAL_KEY));
    if(savedMessage) {
        refs.email.value =savedMessage.email;
        refs.textarea.value =savedMessage.message;
        console.log(savedMessage);
    }
}


