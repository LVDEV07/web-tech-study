//Variaveis
const inputNota = document.getElementById("nota");
const resultado = document.getElementById("resultado");
const message = document.getElementById("message")
const nome = document.getElementById("nome")


function resultadoNotaClick(event) {
    const nota = inputNota.value
    event.preventDefault()


    if (nota == "") {
        message.style.display = "block"

        return false
    }


    if (nota >= 6) {
        resultado.innerHTML = `${nome.value} você está reprovado`;
    }
    else {
        resultado.innerHTML = `${nome.value} você está reprovado`
    }

    inputNota.value = ""

}

