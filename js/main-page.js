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
