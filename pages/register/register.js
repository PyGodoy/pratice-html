function onChangeEmail() {
    toggleEmailErrors();
    toggleButtonsDisable();
}

function onChangePassword() {
    togglePasswordErrors();
    toggleButtonsDisable();

}

function onConfirmPassword() {
    const password = form.password().value;
    const confirmPassword = form.confirmPassword().value;
    form.passwordNotMatch().style.display = password != confirmPassword ? "block" : "none";
    toggleButtonsDisable();
}


function isPasswordRequiredValid() { // Função que verifica a senha
    const password = form.password().value; // A constante password pega o valor do ID "password"
    if (!password) {
        return false; // se a senha for vazia retorna false
    }
    return true; // se a senha não for vazia retorna true
}

function isPasswordMinLenghtValid() { // Função que verifica a senha
    const password = form.password().value; // A constante password pega o valor do ID "password"
    if (password.length < 6) {
        return false; // se a senha for vazia retorna false
    }
    return true; // se a senha não for vazia retorna true
}

function isConfirmPasswordValid() {
    const confirmPassword = form.confirmPassword().value;
    const password = form.password().value;
    if (confirmPassword != password) {
        return false;
    } else {
        return true;
    }

}

function toggleEmailErrors() {
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";
    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}

function togglePasswordErrors() {
    const password = form.password().value;
    form.passwordRequiredError().style.display = isPasswordRequiredValid(password) ? "none" : "block";
    form.passwordMinLenght().style.display = password.length < 6 ? "block" : "none";
}

function toggleButtonsDisable() {
    
    form.registerButton().disabled = !isFormValid();

}

function isFormValid() {
    const email = form.email().value;

    if (!email || !validateEmail(email)) {
        return false;
    }
    const password = form.password().value;
    if (!password || password.length < 6) {
        return false;
    }

    const confirmPassword = form.confirmPassword().value;
    if (password != confirmPassword || confirmPassword != password) {
        return false;
    }

    return true
}

const form = {
    registerButton: () => document.getElementById("register"),
    email: () => document.getElementById("email"),
    password: () => document.getElementById("password"),
    confirmPassword: () => document.getElementById("confirmPassword"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
    passwordMinLenght: () => document.getElementById("password-min-length-error"),
    passwordNotMatch: () => document.getElementById("password-not-match"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
}