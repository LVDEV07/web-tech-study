import React from 'react'
import "./header.css"

export default function Index() {
  return (
    <header className='header'>
        <section className='title-container'>
          <img src="src\assets\images\icon-jornal.jpg" alt="" width="60px"/>
        
        <div className='titulos'>
        <h1 className='title'>Noticias Semanais</h1>
        <h2>As noticias mais importantes da semana</h2>
        </div>
        </section>
    </header>
  )
}
