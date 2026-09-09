import React from 'react'
import Box from "../../components/box"
import img1 from "../../assets/images/img1.jpg"
import img2 from "../../assets/images/img2.jpg"
import Footer from "../../components/footer"

export default function index() {
  return (
    <main className='container'>
     <section className='d-flex'>
        <Box title="Titulo do componente" description="Este é um parágrafo de exemplo para o componente" imagem={img1}/>
        <Box title="Titulo do componente 2" description="Este é um parágrafo de exemplo para o componente" imagem={img2}/>
     </section>

    </main>
  )
}
