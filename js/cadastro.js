
const formulario = document.querySelector("#formulario")
const nome = document.querySelector("#name")
const email = document.querySelector("#email")
const cidade = document.querySelector("#cidade")
const estado = document.querySelector("#estado")
const senha = document.querySelector("#password")
const cpf = document.querySelector("#cpf")
const data = document.querySelector("#data")

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

  if (!validaCPF(cpf.value)) {
    alert("O CPF é inválido! Ele precisa conter exatamente 11 números.")
    return
  }


  if (data.value === "") {
    alert("Selecione sua data de nascimento!")
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



  window.location.href = "login.html"
})

function validaSenha(password, minDigit) {
  return password.length >= minDigit
}

function validaCPF(cpf) {
  const apenasNumeros = cpf.replace(/\D/g, "");
  return apenasNumeros.length === 11;
}
