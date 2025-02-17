import pool from './conexao.js';


export async function deletaCampeonato(id) {
    const conexao = await pool.getConnection(); //cria a conexao e atribui a variavel conexao
    const query = 'DELETE FROM campeonatos WHERE id = ?';
    const [resposta] = await conexao.execute(query, [id]);
    console.log(resposta);
    conexao.release();
    return resposta
    
}