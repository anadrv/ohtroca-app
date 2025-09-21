document.addEventListener("DOMContentLoaded", () => {
  const exchangeButton = document.querySelector(".btn-exchange");

  exchangeButton.addEventListener("click", () => {
    if (validateSelection()) {
      alert("Troca solicitada com sucesso!");
    }
  });

  function validateSelection() {

    const itemGroup = document.querySelectorAll(".exchange-items__options .grid input[type='checkbox']");
    const conditionGroup = document.querySelectorAll(".condition .question-container input[type='checkbox']");
    const methodGroup = document.querySelectorAll(".method .question-container input[type='checkbox']");


    const isChecked = (group) => Array.from(group).some((cb) => cb.checked);


    if (!isChecked(itemGroup)) {
      alert("Selecione pelo menos 1 item para trocar!");
      return false;
    }

    if (!isChecked(conditionGroup)) {
      alert("Selecione a condição do item!");
      return false;
    }

    if (!isChecked(methodGroup)) {
      alert("Selecione a forma de troca!");
      return false;
    }

    return true; 
  }

 
  const groups = [
    document.querySelector(".exchange-items__options .grid"),
    document.querySelector(".condition .question-container"),
    document.querySelector(".method .question-container")
  ];

  groups.forEach((group) => {
    const checkboxes = group.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          checkboxes.forEach((other) => {
            if (other !== checkbox) other.checked = false;
          });
        }
      });
    });
  });
});
