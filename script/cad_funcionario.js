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
document.addEventListener("DOMContentLoaded", () => {
    
    const form = document.getElementById("formCadastro");

    // ---- Função de mensagem visual ----
    function mostrarMensagem(texto, tipo = "sucesso") {
        const msg = document.createElement("div");
        msg.className = `mensagem ${tipo}`;
        msg.innerText = texto;

        document.body.appendChild(msg);

        setTimeout(() => msg.classList.add("mostrar"), 50);
        setTimeout(() => {
            msg.classList.remove("mostrar");
            setTimeout(() => msg.remove(), 500);
        }, 3000);
    }

    // ---- Função de validação ----
    function validarCampos() {
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const cargo = document.getElementById("cargo").value.trim();

        if (!nome || !email || !cargo) {
            mostrarMensagem("Preencha todos os campos obrigatórios!", "erro");
            return false;
        }
        return true;
    }

    // ---- Máscara de telefone ----
    const telInput = document.getElementById("telefone");
    telInput.addEventListener("input", function () {
        let v = this.value.replace(/\D/g, "");

        if (v.length > 11) v = v.slice(0, 11);

        if (v.length <= 10) {
            this.value = v.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
        } else {
            this.value = v.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
        }
    });

    // ---- Envio do formulário ----
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!validarCampos()) return;

        mostrarMensagem("Cadastro salvo com sucesso!");
        form.reset();
    });
});

