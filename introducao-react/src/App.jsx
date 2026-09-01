import Header from "./Components/Header"
import Card from "./Components/Card"
import Footer from "./Components/Footer"
import Banner from "./Components/Banner/Banner"
import Img from "./Components/ImgCard"
import Anuncio from "./Components/Anuncio"
import Count from "./Components/count"
import Box from "./Components/Box"
import Piloto from "./Components/Pilotos"
function App() {


  return (
    <>
    <h1>Campeões mundiais de f1 1950-1960</h1>
    
    <Piloto/>

    <hr />




    <Count/>
    <Header title = "Meu site"/>
    <Banner>

      <h1>Bem vindo ao meu site</h1>
      <h2>Aqui você encontra as melhores ofertas</h2>

    <Box/>    
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
