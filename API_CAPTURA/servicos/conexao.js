const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'clinicaluvi', 
  password: 'clinica123', 
  database: 'clinica'
});

connection.connect((err) => {
  if (err) {
    console.error('Algo deu errado ao conectar ao Banco de Dados:', err);
    return;
  }
  console.log('Se conectando ao Banco de Dados.');
});

module.exports = connection;