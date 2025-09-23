
const formulario = document.querySelector("#formulario")
const nome = document.querySelector("#name")
const email = document.querySelector("#email")
const cidade = document.querySelector("#cidade")
const estado = document.querySelector("#estado")
const senha = document.querySelector("#password")

formulario.addEventListener("submit", (event) => {
  event.preventDefault()
  window.location.href = "login.html"

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

  if (!validaSenha(senha.value, 5)) {
    alert("A senha precisa ter no mínimo 5 dígitos")
    return
  }
  
  formulario.submit()
})

function validaSenha(password, minDigit) {
  return password.length >= minDigit
}
