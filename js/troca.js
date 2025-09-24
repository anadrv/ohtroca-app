const abrirModal = document.getElementById("abrirModal");
const modal = document.getElementById("modal");
const fecharModal = document.getElementById("fecharModal");
const continuar = document.getElementById("continuar");


abrirModal.addEventListener("click", () => {
    modal.style.display = "flex";
});


fecharModal.addEventListener("click", () => {
    modal.style.display = "none";
});


continuar.addEventListener("click", () => {
    window.location.href = "cadastro.html";
});


window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
