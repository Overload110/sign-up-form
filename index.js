const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("tel");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirm-pass");

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
})

function validateInputs(){
    const firstNameValue = firstName.value.trim();
    const lastNameValue = firstName.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const confirmValue = confirmPass.value.trim();
}

function setError(element, message){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}