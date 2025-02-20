import express from 'express';
import cors from 'cors';
import { cadastraUsuario } from './servicos/cadastro_servicos.js';

const app = express();
app.use(express.json());
app.use(cors());


app.post('/usuarios', async (req, res) => {
    try {
        const { nome, email, telefone } = req.body;

        if (!nome || !email) {
            return res.status(400).json({ erro: "Nome e email são obrigatórios." });
        }

        const resultado = await cadastraUsuario(req.body);
        res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!", id: resultado.insertId });
    } catch (erro) {
        console.error("Erro ao cadastrar usuário:", erro);
        res.status(500).json({ erro: "Erro ao cadastrar usuário. Tente novamente mais tarde." });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});