document.getElementById('formCadastro').addEventListener('submit', async function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

   
    const usuario = {
        nome: nome,
        email: email,
        telefone: telefone
    };

    try {
        
        const resposta = await fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        });

        const dados = await resposta.json();

        if (resposta.ok) {
         
            document.getElementById('mensagem').textContent = `Usuário cadastrado com sucesso! ID: ${dados.id}`;
            document.getElementById('mensagem').style.color = 'green';
        } else {
           
            document.getElementById('mensagem').textContent = `Erro: ${dados.erro}`;
            document.getElementById('mensagem').style.color = 'red';
        }
    } catch (erro) {
        
        document.getElementById('mensagem').textContent = `Erro ao cadastrar usuário: ${erro.message}`;
        document.getElementById('mensagem').style.color = 'red';
    }
});