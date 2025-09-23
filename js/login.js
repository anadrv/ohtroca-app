const formulario = document.querySelector("#formulario")
const email = document.querySelector("#email")
const senha = document.querySelector("#password")

formulario.addEventListener("submit", (event) => {
  event.preventDefault()
  window.location.href = "main-page.html"

  if (email.value === "") {
    alert("Campo vazio! Por favor, preencha seu e-mail.")
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