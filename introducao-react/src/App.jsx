import Header from "./Components/Header"
import Card from "./Components/card"
import Footer from "./Components/Footer"
import Banner from "./Components/Banner"


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
    <Footer title = "Fim"/>

    
    </>
  )
}

export default App
