import React from 'react';
import { Link } from 'react-router-dom';
import Botao from '../component/Botao';

import "../pages-css/comida.css";

class Comida extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: this.props.location.state.nome,
      preferencia: this.props.location.state.preferencia,
      comida: '',
    };

    this.hundleButtons = this.hundleButtons.bind(this);
  }

  hundleButtons(event) {
    this.setState({
      comida: event.target.value,
    });
  }

  render() {
    const { nome, preferencia, comida } = this.state;
    return (   
      <div className="container-comida">  
        <h2>Escolha a pior comida:</h2>
        {
          comida === "Açai"
          ? <button className="btn-comida-option" value="Açai" onClick={ this.hundleButtons }>Açai</button>
          : <button className="btn-comida" value="Açai" onClick={ this.hundleButtons }>Açai</button>
        }
        {
          comida === "Sushi"
          ? <button className="btn-comida-option" value="Sushi" onClick={ this.hundleButtons }>Sushi</button>
          : <button className="btn-comida" value="Sushi" onClick={ this.hundleButtons }>Sushi</button>
        }
        {
          comida === "Sopa"
          ? <button className="btn-comida-option" value="Sopa" onClick={ this.hundleButtons }>Sopa</button>
          : <button className="btn-comida" value="Sopa" onClick={ this.hundleButtons }>Sopa</button>
        } 
        <Link to={{ pathname: "/animal", state: { nome, preferencia, comida }}}>
          <Botao />
        </Link>                 
      </div>  
    );
  }
}

export default Comida;