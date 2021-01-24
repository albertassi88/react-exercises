import './App.css';
import React from 'react';
import Filho from './Filho';

/* Pelo componente PAI é enviado as informações para o componente FILHO.
No componente FILHO a gente recupera essas informações via PROPS e utiliza. 
para exibir na tela. */

class Pai extends React.Component {
  render() {
    const array = ['1', '2', '3', '4'];
    return (
      <div className="App">
        <Filho arrayProps={array}/>
      </div>
    );
  }
}

export default Pai;
