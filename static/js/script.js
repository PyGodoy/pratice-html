function validateFields() {
    const emailValid = isEmailValid(); // A constante emailValid armazena se o email é valido ou não pela função isEmailValid()
    document.getElementById("recover-password-button").disabled= !emailValid; // O botão de Recuperar Senha ficara desabilitado se o email for inválido
    const passwordValid = isPasswordValid(); // a constante passwordValid armazena se o email é valido ou não pela função isPasswordValid
    document.getElementById("login-button").disabled = !emailValid || !passwordValid // O botão de login ficara desabilitado se o email for invalido ou a senha
}

function isEmailValid() { //função que verifica se o email é valido
    const email = document.getElementById("email").value; // A constante email pega o valor do ID "email"
    if (!email) {
        return false; // Se o email for vazio, retorna falso
    }
    return validateEmail(email); // se o email não for vazio ele chama a função de validação de email no validateEmail(email)
}

function isPasswordValid() { // Função que verifica a senha
    const password = document.getElementById('password').value; // A constante password pega o valor do ID "password"
    if (!password) {
        return false; // se a senha for vazia retorna false
    }
    return true; // se a senha não for vazia retorna true
}

function validateEmail(email) { // Função que verifica se o email é valido
    return /\S+@\S+\.\S+/.test(email) // A função test() verifica se o email atende a um determinado padrão
    };