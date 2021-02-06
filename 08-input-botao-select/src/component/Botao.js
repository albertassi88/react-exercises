import React from 'react';
import '../component/botao.css';

class Botao extends React.Component {
  render() {
    return (   
        <div className="btn-container">  
          <button className="btn">Próxima</button>         
        </div>  
    );
  }
}

export default Botao;