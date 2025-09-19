const buttons = document.querySelectorAll(".options-show__btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // remove ativo de todos
    buttons.forEach(b => b.classList.remove("active"));
    // adiciona no clicado
    btn.classList.add("active");
  });
});