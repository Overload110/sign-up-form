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

    if(firstNameValue === ""){
        setError(firstName, "First name is required.");
    }else{
        setSuccess(firstName);
    }
    if(lastNameValue === ""){
        setError(lastName, "Last name is required.");
    }else{
        setSuccess(lastName);
    }
    if(emailValue === ""){
        setError(email, "Email is required.");
    }else if(!isValidEmail(emailValue)){
        setError(email, "Please enter a valid email address.");
    }else{
        setSuccess(email);
    }

    if(phoneValue === ""){
        setError(phone, "Email is required.");
    }else if(!isValidPhone(phoneValue)){
        setError(phone, "Please enter a valid phone number.");
    }else{
        setSuccess(phone);
    }

    if(passwordValue === ""){
        setError(password, "Password is required.");
    }else if(passwordValue.length < 8){
        setError(password, "Password must be at least eight characters long.");
    }else{
        setSuccess(password);
    }

    if(confirmValue === ""){
        setError(confirmPass, "Please confirm your password.");
    }else if(confirmValue !== passwordValue){
        setError(confirmPass, "Passwords don't match.");
    }else{
        setSuccess(confirmPass);
        setSuccess(password);
    }
}

function setError(element, message){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

function setSuccess(element){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = "";
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function isValidPhone(phone){
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    return re.test(String(phone).toLowerCase());
}