document.addEventListener("DOMContentLoaded", function () {

    // Seleciona o formulário correto
    const form = document.getElementById("formCadastro");

    // Campo de telefone com máscara
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

    // Ação ao enviar o formulário
    form.addEventListener("submit", function (event) {
        event.preventDefault();  // Impede o recarregamento

        // Obtém valores
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const cargo = document.getElementById("cargo").value.trim();

        // Validação simples
        if (!nome || !email || !cargo) {
            alert("Preencha todos os campos obrigatórios.");
            return;
        }

        // Mensagem de sucesso
        alert("Cadastro efetuado com sucesso!");

        // Limpa o formulário
        form.reset();
    });
});