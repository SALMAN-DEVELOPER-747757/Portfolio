const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    validateInputs();
});

function validateInputs() {

    // Name Validation
    if (nameInput.value.trim() === "") {
        setError(nameInput, "Name is required");
    } else {
        setSuccess(nameInput);
    }

    // Email Validation
    if (emailInput.value.trim() === "") {
        setError(emailInput, "Email is required");
    } else if (!isValidEmail(emailInput.value.trim())) {
        setError(emailInput, "Enter a valid email");
    } else {
        setSuccess(emailInput);
    }

    // Password Validation
    if (passwordInput.value.trim() === "") {
        setError(passwordInput, "Password is required");
    } else if (passwordInput.value.length < 6) {
        setError(passwordInput, "Password must be at least 6 characters");
    } else {
        setSuccess(passwordInput);
    }
}

function setError(input, message) {
    input.classList.remove("success");
    input.classList.add("error");

    const errorDisplay = input.nextElementSibling;
    errorDisplay.innerText = message;
}

function setSuccess(input) {
    input.classList.remove("error");
    input.classList.add("success");

    const errorDisplay = input.nextElementSibling;
    errorDisplay.innerText = "";
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}