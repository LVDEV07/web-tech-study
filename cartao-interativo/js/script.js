const botaoMax = document.querySelector("#btnRevelarMax")
const botaoIsack = document.querySelector("#btnRevelarIsack")
const imgMax = document.querySelector("#max")
const imgIsack = document.getElementById("isack")
const texto2 = document.querySelector("#verify2")
const texto1 = document.querySelector("#verify1")
const infoMax = document.querySelector("#infoMax")
const infoIsack = document.querySelector("#infoIsack")

const textoOriginalMax = texto1.innerHTML
const textoOriginalIsack = texto2.innerHTML

function resetMax(){
    imgMax.innerHTML = ""
    texto1.innerHTML = textoOriginalMax
    botaoMax.style.display = ""
    infoMax.style.display = "none"
}

function resetIsack(){
    imgIsack.innerHTML = ""
    texto2.innerHTML = textoOriginalIsack
    botaoIsack.style.display = ""
    infoIsack.style.display = "none"
}

botaoIsack.addEventListener("click", function(){
    resetMax()
    imgIsack.innerHTML = '<img src="./images/images (1).jpg" alt="">'
    texto2.innerHTML = "Isack Hadjar revelado! Confira as informações abaixo."
    botaoIsack.style.display = "none"
    infoIsack.style.display = "block"
})

botaoMax.addEventListener("click", function(){
    resetIsack()
    imgMax.innerHTML = '<img src="./images/gettyimages-1388032461.jpg" alt="">'
    texto1.innerHTML = "Max Verstappen revelado! Confira as informações abaixo."
    botaoMax.style.display = "none"
    infoMax.style.display = "block"
})