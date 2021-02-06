import React from 'react';
import { Link } from 'react-router-dom';
import Botao from '../component/Botao';

class Preferencia extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: this.props.location.state.nome,
      preferencia: '',
    };

    this.hundleInputRadio = this.hundleInputRadio.bind(this);
  }

  hundleInputRadio(event) {
    this.setState({
      preferencia: event.target.value,
    });
  }
  
  render() {
    const { nome, preferencia } = this.state;     
    return (   
        <div>
          <h2>Escolha o certo:</h2>
          <label>
            Biscoito
            <input type="radio" name="biscoito" value="biscoito" onClick={ this.hundleInputRadio } />
          </label>  
          <label>
            Bolacha
            <input type="radio" name="bolacha" value="bolacha" onClick={ this.hundleInputRadio } />
          </label>                     
          <Link to={{ pathname: "/comida", state: { nome, preferencia }}}>
            <Botao />
          </Link>                          
        </div>  
    );
  }
}

export default Preferencia;