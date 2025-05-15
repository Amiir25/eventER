/* Form validation for create acoount page of eventER */

// Create account form validation
document.querySelector('#create-account').addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
        alert('valid First Name');
    }
})

function validateForm() {
    return (
        checkFirstName() &&
        checkLastName() &&
        checkEmail() &&
        checkPhoneNumber()
    );
}

// Check First Name
function checkFirstName() {
    const firstName = document.querySelector('#first-name');
    const firstNameError = document.querySelector('#first-name-error');
    const errorMessage = 'First name should not be empty. It should be a text with a minimum of 2 characters.';

    const regExp = /^[A-Za-z]{2,}$/;

    if (regExp.test(firstName.value.trim())) {
        validFormElement(firstName, firstNameError);
        return true;
    } else {
        invalidFormElement(firstName, firstNameError, errorMessage);
        return false;
    }
}

// Check Last Name
function checkLastName() {
    const lastName = document.querySelector('#last-name');
    const lastNameError = document.querySelector('#last-name-error');
    const errorMessage = 'Last name should not be empty. It should a text with a minimum of 2 characters.';

    const regExp = /^[A-Za-z]{2,15}$/;

    if (regExp.test(lastName.value.trim())) {
        validFormElement(lastName, lastNameError);
        return true;
    } else {
        invalidFormElement(lastName, lastNameError, errorMessage);
        return false;
    }
}

// Check Email
function checkEmail() {
    const email = document.querySelector('#email');
    const emailError = document.querySelector('#email-error');
    const errorMessage = 'Enter a valid email address';

    const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (regExp.test(email.value.trim())) {
        validFormElement(email, emailError);
        return true;
    } else {
        invalidFormElement(email, emailError, errorMessage)
        return false;
    }
}

// Check Phone number
function checkPhoneNumber() {
    const phoneNumber = document.querySelector('#phone');
    const phoneNumberError = document.querySelector('#phone-error');
    errorMessage = 'Enter a valid phone number';

    const regExp = /^\+?[\d\s\-().]{7,20}$/;

    if (regExp.test(phoneNumber.value.trim())) {
        validFormElement(phoneNumber, phoneNumberError);
        return true;
    } else {
        invalidFormElement(phoneNumber, phoneNumberError, errorMessage);
        return false;
    }
}

// Valid Form Element
function validFormElement(formElement, formElementError) {
    formElement.classList.remove('border-red-500');
    formElement.classList.add('border-green-500');
    formElementError.classList.add('hidden') ;
}

// Invalid Form Element
function invalidFormElement(formElement, formElementError, errorMessage) {
    formElement.classList.add('border-red-500');
    formElement.scrollIntoView({ behavior: "smooth", block: "center" });
    formElementError.classList.remove('hidden');
    formElementError.textContent = errorMessage;
}