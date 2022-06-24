let myForm = document.getElementById('form')
let firstName = document.getElementById('fname')
let lastName = document.getElementById('lname')
let userEmail = document.getElementById('email')
let userDate = document.getElementById('pickdate')

let userComment = document.getElementById('comment');
let timeout;
let password = document.getElementById('passInput');
let displayStrength = document.getElementById('strengthMeter');
var strongRegex = new RegExp('(?=.* [a - z])(?=.*[A-Z])(?=.* [0 - 9])(?=.* [^ A - Za - z0 - 9])(?=.{ 8, })');
var mediumRegex = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');


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

function setStrength(passwordParam) {
    if (strongRegex.test(passwordParam)) {
        displayStrength.style.backgroundColor = 'green';
        password.style.borderColor = 'green';
        displayStrength.textContent = 'Strong';
    } else if (mediumRegex.test(passwordParam)) {

        displayStrength.style.backgroundColor = 'orange';
        password.style.borderColor = 'orange';
        displayStrength.textContent = 'Medium';

    } else {
        displayStrength.style.backgroundColor = 'red';
        password.style.borderColor = 'red';
        displayStrength.textContent = 'Weak';

    }

}

password.addEventListener("input", () => {
    displayStrength.style.display = 'block';
    clearTimeout(timeout);
    timeout = setTimeout(() => setStrength(password.value), 500);

    if (password.value.length !== 0) {
        displayStrength.style.display = 'block';
    } else {
        displayStrength.style.display = 'none';
    }

});

function countChars(obj) {
    document.getElementById('charnum').innerHTML = obj.value.length + ' characters';
}