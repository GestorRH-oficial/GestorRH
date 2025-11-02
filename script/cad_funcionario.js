// Pega o formulário
const form = document.querySelector('.form-cadastro');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // impede de recarregar a página

    // pega os valores digitados
    const nome = document.querySelector('#nome').value.trim();
    const email = document.querySelector('#email').value.trim();
    const cargo = document.querySelector('#Cargo').value;

    // validação simples
    if (nome === '' || email === '' || cargo === '') {
        alert('Preencha todos os campos obrigatórios.');
        return;
    }

    // só pra parecer profissional
    alert(`Funcionário cadastrado com sucesso:
Nome: ${nome}
E-mail: ${email}
Cargo: ${cargo}`);

    form.reset();
});
