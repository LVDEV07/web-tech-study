import Header from "./Components/Header"
import Card from "./Components/card"
import Footer from "./Components/Footer"
import Banner from "./Components/Banner"
import Img from "./Components/Img"
import Anuncio from "./Components/Anuncio"


function App() {


  return (
    <>
    <Header title = "Meu site"/>
    <Header title = "lorem ipsum"/>
    <Header title = "Introdução react"/>
    <Banner>

      <h1>Bem vindo ao meu site</h1>
      <h2>Aqui você encontra as melhores ofertas</h2>

    </Banner>
    <Card/>
    <Img caption = "Cachorro" />
    <Footer title = "Fim"/>

    <Anuncio title = "Notebook" url = "https://lojateste.bruc.com.br/319-large_default/macbook-air-apple-md760bz-a-core-i5-dual-core-4gb-128gb-133.jpg">
      <p>MacBook Air de 11 polegadas</p>
      <h3>Valor: 3549,00</h3>
    </Anuncio>
    
    </>
  )
}

export default App
