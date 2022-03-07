

document.getElementById('submitButton').addEventListener('click', function () {
    const nameValid = validateField('firstName', 'First name is required');
    const lastNameValid = validateField('lastName', 'Last name is required');

    let cityHasValue = validateField('city', 'City is required');
    let emailHasValue = validateField('email', 'Email is required');

    if (emailHasValue) {
        emailHasValue = validateEmail();
    }

    if (cityHasValue) {
        cityHasValue = validateCity();
    }

    const allFieldsValid = nameValid && lastNameValid && cityHasValue && emailHasValue;
    if (allFieldsValid) {
        showValues();
    } else {
        hideValues();
    }
});

function showValues() {
    [
        'firstName',
        'lastName',
        'email',
        'city'
    ].forEach(id => {
        const emelent = document.getElementById(id);
        const valueElement = document.getElementById(`${id}Display`);
        valueElement.innerHTML = `${id}: ${emelent.value};`;
    });
}

function hideValues () {
    [
        'firstName',
        'lastName',
        'email',
        'city'
    ].forEach(id => {
        const valueElement = document.getElementById(`${id}Display`);
        valueElement.innerHTML = null;
    });
}


function validateField(id, errorMessage) {
    const fieldInput = document.getElementById(id);
    const label = fieldInput.parentElement.children.item(0);
    const error = document.getElementById(`${id}Error`);
    const value = fieldInput.value;

    if (value === null || value === '' || value.trim() === '') {
        error.innerHTML = errorMessage;
        error.style.display = 'block';
        label.classList.add('error');
        return false;
    } else {
        error.innerHTML = '';
        error.style.display = 'none';
        label.classList.remove('error');
    }

    return true;
}


function validateEmail() {
    const emailInput = document.getElementById('email');
    const label = emailInput.parentElement.children.item(0);
    const error = document.getElementById(`emailError`);
    const value = emailInput.value;

    
    if (!value.includes('@') || !value.includes('.') || value.lastIndexOf('.') < value.lastIndexOf('@')) {
        error.innerHTML = 'Email is invalid';
        error.style.display = 'block';
        label.classList.add('error');
        return false;
    } else {
        error.innerHTML = '';
        error.style.display = 'none';
        label.classList.remove('error');
    }

    return true;
}



function validateCity() {
    const cityInput = document.getElementById('city');
    const label = cityInput.parentElement.children.item(0);
    const error = document.getElementById(`cityError`);
    const value = cityInput.value;

    
    if (value.length < 4) {
        error.innerHTML = 'City length must be greater then 3';
        error.style.display = 'block';
        label.classList.add('error');
        return false;
    } else {
        error.innerHTML = '';
        error.style.display = 'none';
        label.classList.remove('error');
    }

    return true;
}
