document.addEventListener("DOMContentLoaded", () => {
    const btnEntrar = document.getElementById("btnEntrar");

    btnEntrar.addEventListener("click", () => {
        const usuario = document.getElementById("usuario").value;
        const senha = document.getElementById("senha").value;

        // Verificação básica
        if (usuario === "" || senha === "") {
            alert("Preencha usuário e senha!");
            return;
        }

        // Aqui você poderia validar com um banco futuramente.
        // Por enquanto só vamos deixar passar.
        alert(`Login realizado por: ${usuario}`);

        // Redireciona para o menu
        window.location.href = "./pages/menu.html";
    });
});
