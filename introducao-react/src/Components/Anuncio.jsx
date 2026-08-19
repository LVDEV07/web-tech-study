import "./Anuncio.css"
 
const Card = (props) =>{

    return(
        <section>
      <article className="card">
        <h1>{props.title}</h1>
        <img src={props.url} className="img-card"/>

        <>
            {props.children}  
        </>
      </article>


      <hr />
    </section>

    )
}

export default Card;