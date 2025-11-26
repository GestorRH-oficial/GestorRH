<script>
// --- Botão Aprovar ---
document.querySelector(".btn:nth-of-type(1)").addEventListener("click", function () {
    alert("✔ Abono aprovado com sucesso!");
});

// --- Botão Anexar Documento ---
document.querySelector(".btn:nth-of-type(2)").addEventListener("click", function () {
    window.open("upload.html", "_blank");
});
</script>
