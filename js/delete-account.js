document.getElementById("deleteForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("confirmModal").style.display = "flex";
});

document.getElementById("cancelDelete").addEventListener("click", function() {
  document.getElementById("confirmModal").style.display = "none";
});

document.getElementById("confirmDelete").addEventListener("click", function() {
  alert("Conta excluída com sucesso!");
 
  window.location.href = "index.html";
});