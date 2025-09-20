document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      window.location.href = "/pages/item-detail.html"; 
    });
  });
});

const filterBtn = document.getElementById("filter-btn");
const filterMenu = document.querySelector(".filter-menu");

filterBtn.addEventListener("click", (event) => {
  event.stopPropagation(); 
  filterMenu.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  if (!filterMenu.contains(event.target) && !filterBtn.contains(event.target)) {
    filterMenu.classList.remove("active");
  }
});

