import "./Faq.css"
import { useEffect, useState } from 'react'

export default function index() {

      const [faq, setFaq] = useState([]);
  
      useEffect(() => {
          fetch("http://localhost:3000/faq")
          .then((response) => response.json())
              .then((data) => setFaq(data)).catch((error) => console.log(error))
      }, [])
  return (
    <div>
    <div class="conteudo">

  <h2>Perguntas Frequentes</h2>

 {faq.map((faq) => (
            

  <details>
    <summary>{faq.id}. {faq.pergunta}</summary>
    <p>{faq.resposta}</p>
  </details>



            ))}

</div>

    </div>
  )
}
