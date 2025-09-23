document.addEventListener("DOMContentLoaded", () => {
  const filterBtn = document.querySelector(".filter-btn");
  const filterMenu = document.querySelector(".filter-menu");

  filterBtn.addEventListener("click", () => {
    filterMenu.classList.toggle("active");
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const favButtons = document.querySelectorAll(".fav i");

  favButtons.forEach(icon => {
    icon.addEventListener("click", () => {
      icon.classList.toggle("active");
      icon.classList.toggle("fa-regular");
      icon.classList.toggle("fa-solid");
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn-ver-mais");
  const hiddenCards = document.querySelectorAll(".colecao .card.hide");

  btn.addEventListener("click", () => {
    const isExpanded = btn.textContent === "Ver menos";

    if (isExpanded) {

      hiddenCards.forEach(card => card.classList.add("hide"));
      btn.textContent = "Ver mais";
    } else {

      hiddenCards.forEach(card => card.classList.remove("hide"));
      btn.textContent = "Ver menos";
    }
  });
});




