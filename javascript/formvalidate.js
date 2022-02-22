let myForm = document.getElementById('form')
let firstName = document.getElementById('fname')
let lastName = document.getElementById('lname')
let userEmail = document.getElementById('email')
let userDate = document.getElementById('pickdate')
let password = document.getElementById('password')
let userComment = document.getElementById('comment')
let strength = document.getElementById('strength');
var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");


myForm.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const displayError = inputControl.querySelector('.error');

    displayError.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const displayError = inputControl.querySelector('.error');

    displayError.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const validEmail = userEmail => {
    const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailReg.test(String(userEmail).toLowerCase());
}

const validateInputs = () => {
    const firstNameVal = firstName.value.trim();
    const lastNameVal = lastName.value.trim();
    const emailValue = userEmail.value.trim();
    const dateVal = userDate.value.trim();
    const passwordValue = password.value.trim();
    const commentValue = userComment.value.trim();

    if (firstNameVal === '') {
        setError(firstName, 'First name is required!')
    } else {
        setSuccess(firstName);
    }

    if (lastNameVal === '') {
        setError(lastName, 'Last name is required!');
    } else {
        setSuccess(lastName);
    }

    if (emailValue === '') {
        setError(userEmail, 'Email is required!')
    } else if (!validEmail(emailValue)) {
        setError(userEmail, 'Please provide a valid email')
    } else {
        setSuccess(userEmail);
    }

    if (dateVal === '') {
        setError(userDate, 'Date is required!')
    } else {
        setSuccess(userDate);
    }

    if (passwordValue === '') {
        setError(password, 'Password is Required!')
    } else if (passwordValue.length < 6) {
        setError(password, 'Password must at least 6 characters!')
    } else {
        setSuccess(password);
    }

    if (commentValue === '') {
        setError(userComment, 'Enter a comment!');
    } else if (commentValue.length >= 500) {
        setError(userComment, 'Comment is too long');
    }
    else {
        setSuccess(userComment);
    }
}

password.addEventListener('change', function () {
    passwordStrength();

});


const setStrength = (element, message) => {
    const inputControl = element.parentElement;
    const displayStrength = inputControl.querySelector('.strength');
    displayStrength.innerText = message;
    inputControl.classList.add('strength');


}

function passwordStrength() {
    if (mediumRegex.test(password.value)) {

        setStrength(password, 'Medium!');
    } else if (strongRegex.test(password.value)) {

        setStrength(password, 'Strong!');
    } else if (password === '') {
        inputControl.classList.remove('strength');
    } else {
        setStrength(password, 'Weak!')
    }
}

function countChars(obj) {
    document.getElementById('charnum').innerHTML = obj.value.length + ' characters';
}