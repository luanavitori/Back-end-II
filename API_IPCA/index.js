import express from 'express';
import historicoInflacao from './dados/dados.js';

const app = express();
const port = 8080;


app.get('/historicoIPCA', (req, res) => {
    res.json(historicoInflacao);
});


app.get('/historicoIPCA/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const resultado = historicoInflacao.find(dado => dado.id === id);


    if (!resultado) {
        return res.status(404).json({ error: 'ID não encontrado.' });
    }

    res.json(resultado);
});


app.get('/calcularReajuste/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const dado = historicoInflacao.find(d => d.id === id);

    if (!dado) {
        return res.status(404).json({ error: 'ID não encontrado.' });
    }


    const ipca = dado.ipca;
    const reajuste = (valor) => {
        return valor * (1 + ipca / 100);
    };

    res.json({
        id: dado.id,
        ano: dado.ano,
        mes: dado.mes,
        ipca: dado.ipca,
        reajusteCalculado: reajuste(100)
    });
});

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});