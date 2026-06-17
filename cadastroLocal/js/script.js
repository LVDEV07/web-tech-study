const campo = document.querySelector("#campo")
const salvarBtn = document.querySelector("#salvar")



salvarBtn.addEventListener("click", function(event){
    event.preventDefault()

    const valor = campo.value
    console.log(valor)

    if(valor.trim() == ""){
        alert("Digite algo")
        return
    }

    

    //salvar no LocalStorage
    const chave = `ValorSalvo_${Date.now()}`
    localStorage.setItem(chave, valor)
    campo.value = ""
})

