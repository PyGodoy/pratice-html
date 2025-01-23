function validateEmail(email) { // Função que verifica se o email é valido
    return /\S+@\S+\.\S+/.test(email) // A função test() verifica se o email atende a um determinado padrão
    };

function isEmailValid() { //função que verifica se o email é valido
    const email = form.email().value; // A constante email pega o valor do ID "email"
    if (!email) {
        return false; // Se o email for vazio, retorna falso
    }
    return validateEmail(email); // se o email não for vazio ele chama a função de validação de email no validateEmail(email)
}