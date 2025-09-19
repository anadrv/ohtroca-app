const optionButtons = document.querySelectorAll(".options-show__btn");

optionButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    optionButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const target = btn.querySelector("button").textContent.trim();
    if (target === "Avaliações") {
      document.querySelector(".reviews").style.display = "block";
      document.querySelector(".items").style.display = "none";
    } else {
      document.querySelector(".reviews").style.display = "none";
      document.querySelector(".items").style.display = "block";
    }
  });
});
