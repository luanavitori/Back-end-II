const conexao = require('./conexao.js');

const returnMedicos = () => {
  return conexao.promise().query('SELECT * FROM medicos ORDER BY nome');
};

const returnMedicosPorNome = (nome) => {
  return conexao.promise().query('SELECT * FROM medicos WHERE nome LIKE ? ORDER BY nome', [`%${nome}%`]);
};

const returnMedicosPorEspecialidade = (especialidade) => {
  return conexao.promise().query(
    'SELECT m.id, m.nome, m.telefone, m.email, e.especialidade ' +
    'FROM medicos m ' +
    'JOIN especialidades e ON m.especialidade = e.id ' +
    'WHERE e.especialidade LIKE ? ORDER BY m.nome',
    [`%${especialidade}%`] 
  );
};

const returnMedicosPorId = (id) => {
    return db.promise().query('SELECT * FROM medicos WHERE id = ?', [id]);
  };

module.exports = {
 returnMedicos,
 returnMedicosPorNome,
 returnMedicosPorEspecialidade,
 returnMedicosPorId
};