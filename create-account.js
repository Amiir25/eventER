/* Form validation for create acoount page of eventER */

// Create account form validation
document.querySelector('#create-account').addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
        FullName = `${userFirstName} ${userLastName}`;
        alert(FullName)
    }
})

function validateForm() {
    return (
        checkFirstName() &&
        checkLastName() //&&
        // checkEmail() &&
        // checkPhoneNumber() &&
        // checkCity() &&
        // checkDOB() &&
        // checkGender() &&
        // checkPassword() &&
        // checkConfirmPassword()
    );
}

let userFirstName,
    userLastName,
    userEmail,
    userPhoneNumber,
    userCity,
    userAge,
    userGender,
    userPassword;

// Check First Name
function checkFirstName() {
    const firstName = document.querySelector('#first-name');
    const firstNameError = document.querySelector('#first-name-error');
    let errorMessage = '';
    let trimedFirstName = firstName.value.trim();

    // Check empty if first name is empty
    if (!trimedFirstName) {
        errorMessage = 'Enter your first name';
        invalidFormElement(firstName, firstNameError, errorMessage);
        return false;
    }

    const regExp = /^[A-Za-z]{2,}$/;

    if (regExp.test(trimedFirstName)) {
        userFirstName = trimedFirstName;
        validFormElement(firstName, firstNameError);
        return true;
    } else {
        errorMessage = 'First name should be a text with a minimum of 2 characters.';
        invalidFormElement(firstName, firstNameError, errorMessage);
        return false;
    }
}

// Check Last Name
function checkLastName() {
    const lastName = document.querySelector('#last-name');
    const lastNameError = document.querySelector('#last-name-error');
    let errorMessage = '';
    let trimedLastName = lastName.value.trim();

    // Check empty if last name is empty
    if (!trimedLastName) {
        errorMessage = 'Enter your last name';
        invalidFormElement(lastName, lastNameError, errorMessage);
        return false;
    }

    const regExp = /^[A-Za-z]{2,15}$/;

    if (regExp.test(trimedLastName)) {
        userLastName = trimedLastName;
        validFormElement(lastName, lastNameError);
        return true;
    } else {
        errorMessage = 'Last name should be a text with a minimum of 2 characters.';
        invalidFormElement(lastName, lastNameError, errorMessage);
        return false;
    }
}

// Check Email
function checkEmail() {
    const email = document.querySelector('#email');
    const emailError = document.querySelector('#email-error');
    let errorMessage = '';
    let trimedEmail = email.value.trim();

    // Check if email is empty
    if (!trimedEmail) {
        errorMessage = 'Enter your email';
        invalidFormElement(email, emailError, errorMessage)
        return false;
    }

    const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (regExp.test(trimedEmail)) {
        userEmail = trimedEmail;
        validFormElement(email, emailError);
        return true;
    } else {
        errorMessage = 'Enter a valid email address';
        invalidFormElement(email, emailError, errorMessage)
        return false;
    }
}

// Check Phone number
function checkPhoneNumber() {
    const phoneNumber = document.querySelector('#phone');
    const phoneNumberError = document.querySelector('#phone-error');
    let errorMessage = '';
    let trimedPhoneNumber = phoneNumber.value.trim();

    // check if phone number is empty
    if (!trimedPhoneNumber) {
        errorMessage = 'Enter your phone number';
        invalidFormElement(phoneNumber, phoneNumberError, errorMessage);
        return false;
    }

    const regExp = /^\+?[\d\s\-().]{7,20}$/;

    if (regExp.test(trimedPhoneNumber)) {
        userPhoneNumber = trimedPhoneNumber;
        validFormElement(phoneNumber, phoneNumberError);
        return true;
    } else {
        errorMessage = 'Enter a valid phone number';
        invalidFormElement(phoneNumber, phoneNumberError, errorMessage);
        return false;
    }
}

// Check City
function checkCity() {
    const city = document.querySelector('#city-input');
    const cityError = document.querySelector('#city-error');
    let errorMessage = '';
    let trimedCity = city.value.trim();

    // check if city is empty
    if (!trimedCity) {
        errorMessage = 'Enter your city';
        invalidFormElement(city, cityError, errorMessage);
        return false;
    }

    const regExp = /^[A-Za-z\s]{4,}$/;

    if (regExp.test(trimedCity)) {
        userCity = trimedCity;
        validFormElement(city, cityError);
        return true;
    } else {
        errorMessage = 'Enter a valid city';
        invalidFormElement(city, cityError, errorMessage);
        return false;
    }
}

// Check DOB
function checkDOB() {
    const DOB = document.querySelector('#dob');
    const DOBError = document.querySelector('#dob-error');
    const errorMessage = 'Enter your date of birth';

    if (!DOB.value) {
        invalidFormElement(DOB, DOBError, errorMessage);
        return false;
    }

    let birthDate = new Date(DOB.value);
    let today = new Date();

    // Get the user age
    let age = today.getFullYear() - birthDate.getFullYear();
    // Check month difference
    let monthDiff = today.getMonth() - birthDate.getMonth();
    // Check date difference
    let dateDiff = today.getDate() - birthDate.getDate();

    // If the user hasn't celebrate this year's birthday yet, subtract 1
    if (monthDiff < 0 || (monthDiff === 0 && dateDiff < 0)) {
        age--;
    }
    
    userAge = age;
    validFormElement(DOB, DOBError);
    return true;
}

// Check Gender
function checkGender() {
    const selectedGender = document.querySelector('input[name="gender"]:checked');
    const genderError = document.querySelector('#gender-error');
    const errorMessage = 'Specify your gender';

    // Check if either of the options are selected
    if (!selectedGender) {
        genderError.classList.remove('hidden');
        genderError.textContent = errorMessage;
        return false;
    } else {
        userGender = selectedGender.value;
        genderError.classList.add('hidden');
        return true;
    }
}

// Check Password
function checkPassword() {
    const password = document.querySelector('#password');
    const passwordError = document.querySelector('#password-error');
    let errorMessage = '';
    let trimedPassword = password.value.trim();

    if (!trimedPassword) {
        errorMessage = 'Enter a password';
        invalidFormElement(password, passwordError, errorMessage);
        return false;
    } 

    const regExp = /^[A-Za-z0-9@$#!%*?&]{4,20}$/;

    if (regExp.test(trimedPassword)) {
        userPassword = trimedPassword;
        validFormElement(password, passwordError);
        return true;
    } else {
        errorMessage = 'Password must be 4–20 characters long and may only include letters, numbers, and the symbols @, $, #, !, %, , ?, &.';
        invalidFormElement(password, passwordError, errorMessage);
        return false;
    }
}

// check Confirm Password
function checkConfirmPassword() {
    const passwordValue = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirm-password');
    const confirmPasswordError = document.querySelector('#confirm-password-error');
    let errorMessage = '';
    let trimedConfirmPassword = confirmPassword.value.trim();

    if (!trimedConfirmPassword) {
        errorMessage = 'Confirm your password';
        invalidFormElement(confirmPassword, confirmPasswordError, errorMessage);
        return false;
    }

    if (passwordValue === trimedConfirmPassword) {
        validFormElement(confirmPassword, confirmPasswordError);
        return true;
    } else {
        errorMessage = "Password doesn't match!";
        invalidFormElement(confirmPassword, confirmPasswordError, errorMessage);
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