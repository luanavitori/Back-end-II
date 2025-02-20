import pool from './conexao.js';
import { validaUsuario } from './validacao/valida.js';

export const cadastraUsuario = async (usuario) => {
   
    const validacao = validaUsuario(usuario);
    if (!validacao.valido) {
        throw new Error(validacao.mensagem);
    }

    try {
    
        const [resultado] = await pool.query(
            'INSERT INTO usuarios (nome, email, telefone) VALUES (?, ?, ?)',
            [usuario.nome, usuario.email, usuario.telefone]
        );
        
        return resultado;
    } catch (erro) {
   
        throw new Error("Erro ao cadastrar usuário: " + erro.message);
    }
};