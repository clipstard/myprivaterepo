const button = document.getElementById('submitButton');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');


button.addEventListener('click', () => {
    const valid = validateField('firstName', 'First name is required') &&
    validateField('lastName', 'Last name is required') &&
    validateField('email', 'Email is required') &&
    validateEmail('Email must contain "@" and "."');


    if (valid) {
        console.log(firstNameInput.value + "\n" + lastNameInput.value + "\n" + emailInput.value);
    }
});


function validateField(fieldName, errorMessage) {
    const error = document.getElementById(`${fieldName}Error`);
    const field =  document.getElementById(fieldName);
    const value = field.value;
    if (value === '' || value === null || value.trim() === '') {
        error.innerHTML = errorMessage;
        error.style.display = 'block';
        field.classList.add('error');
        return false;
    } else {
        error.innerHTML = '';
        error.style.display = 'none';
        field.classList.remove('error');
    }

    return true;
}

function validateEmail(errorMessage) {
    const error = document.getElementById('emailError');
    const field =  document.getElementById('email');
    const value = field.value;
    if (value.includes('@') && value.includes('.')) {
        error.innerHTML = '';
        error.style.display = 'none';
        field.classList.remove('error');
        return true;
    } else {
        error.innerHTML = errorMessage;
        error.style.display = 'block';
        field.classList.add('error');
    }

    return false;
}