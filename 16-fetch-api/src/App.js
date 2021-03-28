import React, { useState ,useEffect } from 'react';
import getPlanets from './services/starWarsApi';

function App() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getPlanets()
    .then(data => {
      setPlanets(data.results);
    })  
    .catch((error) => {
      alert("Ocorreu um erro ao buscar os items");
    });
}, []);

  return (
    <div>
      {planets.map((itens, index) => (
        <p key={ index }>{itens.name}</p>
      ))}
    </div>
  );
}

export default App;
