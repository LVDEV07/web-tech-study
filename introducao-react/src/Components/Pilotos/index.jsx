import "./style.css"

function index() {



    const pilotos = [
    {
      nome: "Nino Farina",
      equipe: "Alfa Romeo",
      corUltimaEquipe: "#8B0000",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/f/fc/NinoFarina.jpg?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
      titulos: [1950]
    },
    {
      nome: "Juan Manuel Fangio",
      equipe: "Alfa Romeo, Mercedes, Maserati e Ferrari",
      corUltimaEquipe: "#0F52BA",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/6/63/Juan_Manuel_Fangio_%28circa_1952%29.jpg",
      titulos: [1951, 1954, 1955, 1956, 1957]
    },
    {
      nome: "Alberto Ascari",
      equipe: "Ferrari",
      corUltimaEquipe: "#DC0000",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Ascari_last_photo_in_car.jpg/330px-Ascari_last_photo_in_car.jpg",
      titulos: [1952, 1953]
    },
    {
      nome: "Mike Hawthorn",
      equipe: "Ferrari",
      corUltimaEquipe: "#DC0000",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mike_Hawthorn%2C_autocoureur_verongelukt%2C_Bestanddeelnr_910-1117.jpg",
      titulos: [1958]
    },
    {
      nome: "Jack Brabham",
      equipe: "Cooper-Climax",
      corUltimaEquipe: "#004225",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/BrabhamJack1966B.jpg/250px-BrabhamJack1966B.jpg",
      titulos: [1959, 1960]
    }
  ]


  return (

    <div className='piloto-container'>
      {pilotos.map((piloto,index)=> {

        return(
      <div className='box-piloto' key={index} style={{ backgroundColor: piloto.corUltimaEquipe }}>
        <img src={piloto.imagem} alt={piloto.nome} className='imagem-piloto' />
        <h2>
          {piloto.nome}
        </h2>
        <p>
          {piloto.equipe}
        </p>
        <p>
          Títulos: {piloto.titulos.join(", ")}
        </p>
      </div>
        )
      })}

    </div>
  )
}

export default index;
