function index() {



    const pilotos = [
    {
      nome: "Nino Farina",
      equipe: "Alfa Romeo",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/f/fc/NinoFarina.jpg?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled"
    },
    {
      nome: "Box 1",
      equipe: "Lorem ipsum box 1",
      imagem: "#"
    }
  ]


  return (

    <div className='piloto-container'>
      {pilotos.map((piloto,index)=> {

        return(
      <div className='box-piloto' key={index}>
        <h2>
          {piloto.nome}
        </h2>
        <p>
          {piloto.equipe}
          </p>
        <img src={piloto.imagem} alt="" />
      </div>
        )
      })}

    </div>
  )
}

export default index;
