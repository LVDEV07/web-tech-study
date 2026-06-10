//Variaveis
const inputNota = document.getElementById("nota");
const resultado = document.getElementById("resultado");



function resultadoNotaClick(event) {
    const nota = inputNota.value
    event.preventDefault()


    if (nota == "") {
        alert("É necessário inserir um valor")

        return false
    }


    if (nota >= 6) {
        alert("Aprovado");
    }
    else {
        alert("Reprovado")
    }


}

