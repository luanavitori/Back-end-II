const express = require('express');
const { colecaoAP } = require('./dadosAP');

const app = express();

app.get('/ufs', (req, res) => {
    res.json(colecaoAP)
});

app.get('/ufs/:iduf', (req, res) => {
    const idUF = parseInt(req.params.iduf);
    let mensagemErro = '';
    let uf;

    if (!(isNaN(idUF))) {
        uf = colecaoAP.colecaoAP.find(u => u.id === idUF);
        if (!uf) {
            mensagemErro = 'UF não encontrada';
        }
    } else {
        mensagemErro = 'Requisição inválida';
    }
    if (uf) {
        res.json(uf);
    }
    else {
        res.status(404).json({"erro": mensagemErro});
    }
});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
});