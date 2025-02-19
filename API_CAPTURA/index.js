import express from 'express';
import cors from 'cors';
import { cadastraUsuario } from './servicos/cadastro_servicos.js';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/usuarios', async (req, res) => {
    try {
        const resultado = await cadastraUsuario(req.body);
        res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!", id: resultado.insertId });
    } catch (erro) {
        res.status(400).json({ erro: erro.message });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});