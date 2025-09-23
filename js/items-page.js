document.addEventListener("DOMContentLoaded", () => {
  const filterBtn = document.querySelector(".filter-btn");
  const filterMenu = document.querySelector(".filter-menu");

  filterBtn.addEventListener("click", () => {
    filterMenu.classList.toggle("active");
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

