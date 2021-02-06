import React from 'react';
import Botao from '../component/Botao';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
    };

    this.hundleInputTexto = this.hundleInputTexto.bind(this);
  }

  hundleInputTexto(event) {    
    this.setState({
      nome: event.target.value,
    });
  }

  render() {    
      const { nome } = this.state;
      return (   
          <div>  
            <h2>Digite um nome:</h2>              
            <input type="texto" onChange={ this.hundleInputTexto } ></input>
            <Link to={{ pathname: "/preferencia", state: { nome } }}>
              <Botao />
            </Link>                   
          </div>  
      );
    }
  }

export default Home;