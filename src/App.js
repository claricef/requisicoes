import React, {useEffect, useState} from 'react';

import './style.css';

const App = () => {
  const [nutri, setNutri] = useState([]);

  useEffect(()=>{
      function loadApi(){
         let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

         fetch(url) // se essa requisição deu certo cai no then
         .then((r)=> r.json()) // recebe o resultado (r) e transforma em json, se der certo vai no proximo then
         .then((json)=>{
              console.log(json);
              setNutri(json);
         })

      }
      loadApi();
  },[]);

  return( 
    <div className='container' >
        <header>
          <stron>React Nutri</stron>
        </header>

        {nutri.map((item)=>{
          return(
            <article key={item.id} className="post">
              <strong className="titulo">{item.titulo}</strong>
              <img src={item.capa} alt={item.titulo} className="capa"/>
              <p className="subtitulo">
                {item.subtitulo}
              </p>
              <a className="botao"> Acessar</a>
            </article>
          )
        })}
    </div>
   );
}
 
export default App;
