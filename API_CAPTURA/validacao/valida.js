export const validaUsuario = (usuario) => {
    
    if (!usuario || typeof usuario !== 'object') {
        return { valido: false, mensagem: "Usuário inválido." };
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexTelefone = /^\(\d{2}\) \d{5}-\d{4}$/;

    
    if (!usuario.nome || usuario.nome.length < 2) {
        return { valido: false, mensagem: "Nome deve ter pelo menos dois caracteres." };
    }

  
    if (!usuario.email || !regexEmail.test(usuario.email)) {
        return { valido: false, mensagem: "E-mail inválido." };
    }


    if (!usuario.telefone || !regexTelefone.test(usuario.telefone)) {
        return { valido: false, mensagem: "Telefone inválido. Use o formato (XX) XXXXX-XXXX." };
    }

    return { valido: true };
};
