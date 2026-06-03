/*
    Criando variáveis
*/

const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const telefone = document.querySelector("#tel");
const button = document.querySelector("button");
const lista = document.querySelector(".lista");

/*
    Criando função
*/

button.addEventListener("click", (event) =>{
    event.preventDefault();
    const inputValue = nome.value;
    const inputValueEmail = email.value;
    const inputValueTelefone = telefone.value;
    const templateHTML = `<li> <hr> Nome: ${inputValue} <br> Email: ${inputValueEmail} <br> Telefone: ${inputValueTelefone} <br> </li>`;
    
    
    // Incluir itens no html
    lista.innerHTML += templateHTML

    nome.value = "" ;
    email.value = "";
    telefone.value = ""
})



