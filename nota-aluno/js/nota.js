//Variaveis
const inputNota = document.getElementById("nota");
const resultado = document.getElementById("resultado");
const message = document.getElementById("message")


function resultadoNotaClick(event) {
    const nota = inputNota.value
    event.preventDefault()


    if (nota == "") {
        message.style.display = "block"

        return false
    }


    if (nota >= 6) {
        resultado.innerHTML = "Aprovado";
    }
    else {
        resultado.innerHTML = "Reprovado"
    }

    inputNota.value = ""

}

