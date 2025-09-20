document.addEventListener("DOMContentLoaded", () => {
  // pega todos os cards
  const cards = document.querySelectorAll(".card");

  // percorre cada card
  cards.forEach(card => {
    card.addEventListener("click", () => {
      window.location.href = "/pages/item-detail.html"; 
    });
  });
});
