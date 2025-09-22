const formulario = document.querySelector("#formulario")
const nome = document.querySelector("#name")
const email = document.querySelector("#email")
const cidade = document.querySelector("#cidade")
const estado = document.querySelector("#estado")

formulario.addEventListener("submit", (event) => {
  event.preventDefault()

  if (nome.value === "") {
    alert("Campo vazio! Por favor, preencha seu nome")
    return
  }

  if (email.value === "") {
    alert("Campo vazio! Por favor, preencha seu e-mail.")
    return
  }

  if (cidade.value === "") {
    alert("Campo vazio! Por favor, preencha o campo cidade")
    return
  }

  if (estado.value === "") {
    alert("Campo vazio! Por favor, selecione seu Estado")
    return
  }

  formulario.submit()
})
