import "./Sobre.css";
import { useEffect, useState } from "react";

export default function Sobre() {
  const [sobre, setSobre] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/sobre")
      .then((response) => response.json())
      .then((data) => setSobre(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <section className="container" >
      {sobre.map((item) => (
        <div> 

          <h1 className="title-sobre" key={item.id}>{item.titulo}</h1>
          <p>{item.texto}</p>
        </div>
        ))}
        </section>
    </div>
  );
}