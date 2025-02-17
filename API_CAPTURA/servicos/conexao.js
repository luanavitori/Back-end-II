const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'luser', 
  password: 'captura123', 
  database: 'luviser'
});

connection.connect((err) => {
  if (err) {
    console.error('Algo deu errado ao conectar ao Banco de Dados:', err);
    return;
  }
  console.log('Se conectando ao Banco de Dados.');
});

module.exports = connection;