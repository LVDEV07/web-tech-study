const paises = ["Brasil", "Argentina", "França", "Alemanha", "Japão", "Portugal", "Espanha", "Itália", "Canadá", "Austrália"];

    function listarPaises(){
        
        let lista = document.getElementById("listaPaises")

        lista.innerHTML = ""

        for(let i=0; i<paises.length; i++){
        lista.innerHTML += "<li>" + paises[i] + "</i>"
        }
    }