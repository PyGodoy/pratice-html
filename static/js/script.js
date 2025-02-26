function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
}

function onChangePassword() {
    toggleButtonsDisable(); 
    togglePasswordErrors();

}

function login() {
    showLoading();
    firebase.auth().signInWithEmailAndPassword(
        form.email().value,form.password().value
    ).then(response => {
        hideLoading();
        window.location.href = "pages/home/home.html" // Ao clicar em Entrar vai para a pagina home.html
    }).catch(error => {
        hideLoading();
        alert(getErrorMessage(error));
        console.log('error', error)
    })
    
}

function getErrorMessage(error) {
    if (error.code == "auth/invalid-credential") {
        return "Usuário ou senha inválidos";
    }
    return error.message;
}

function register() {
    showLoading();
    window.location.href = "pages/register/register.html"; // Ao clicar em Registrar vai para a pagina register.html
}

function isEmailValid() { //função que verifica se o email é valido
    const email = form.email().value; // A constante email pega o valor do ID "email"
    if (!email) {
        return false; // Se o email for vazio, retorna falso
    }
    return validateEmail(email); // se o email não for vazio ele chama a função de validação de email no validateEmail(email)
}

function toggleEmailErrors() {
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block"; // Se o email for vazio, mostra a mensagem de erro

    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block"; // Se o email for invalido, ele mostra o erro
}

function togglePasswordErrors() {
    const password = form.password().value
    
    form.passwordInvalidError().style.display = password ? "none" : "block"; // Se o password for vazio, mostra a mensagem de erro
}


function toggleButtonsDisable() {
    const emailValid = isEmailValid(); // A constante emailValid armazena se o email é valido ou não pela função isEmailValid()
    form.recoverPasswordButton().disabled= !emailValid; // O botão de Recuperar Senha ficara desabilitado se o email for inválido
    const passwordValid = isPasswordValid(); // a constante passwordValid armazena se o email é valido ou não pela função isPasswordValid
    form.loginButton().disabled = !emailValid || !passwordValid // O botão de login ficara desabilitado se o email for invalido ou a senha
}

function isPasswordValid() { // Função que verifica a senha
    const password = form.password().value; // A constante password pega o valor do ID "password"
    if (!password) {
        return false; // se a senha for vazia retorna false
    }
    return true; // se a senha não for vazia retorna true
}

function validateEmail(email) { // Função que verifica se o email é valido
    return /\S+@\S+\.\S+/.test(email) // A função test() verifica se o email atende a um determinado padrão
    };


function recoverPassword() {
    showLoading();
    firebase.auth().sendPasswordResetEmail(form.email().value).then(() => {
        hideLoading();
        alert("Email de recuperação de senha enviado com sucesso!");
    }).catch(error => {
        hideLoading();
        alert(getErrorMessage(error));
    });
    
}

// PARTE TELA DE REGISTRO //

function passwordMinLenght() {
    const password = form.password().value;
    form.passwordMinLenght().style.display = password ? "none" : "block";
}

function emailIncorrect() {
    const email = form.email().value;
    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";

}

function passwordNotMatch() {
    const password = form.password().value;
    const confirmPassword = form.confirmPassword().value;

    if (password != confirmPassword) {
        form.passwordIncorrect().value.style.display = confirmPassword || password ? "none" : "block";
    }
    return true;

    }

const form = {
    email: () => document.getElementById('email'),
    password: () => document.getElementById('password'),
    confirmPassword: () => document.getElementById("confirmPassword"),
    passwordMinLenght: () => document.getElementById("password-min-length-error"),
    passwordIncorrect: () => document.getElementById("password-required-error"),
    loginButton: () => document.getElementById('login-button'),
    recoverPasswordButton: () => document.getElementById('recover-password-button'),
    emailRequiredError: () => document.getElementById('email-required-error'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    passwordInvalidError: () => document.getElementById('password-invalid-error'),

}