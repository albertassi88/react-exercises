import React from 'react';
import Botao from '../component/Botao';
import { Link } from 'react-router-dom';

class Animal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: this.props.location.state.nome,
      preferencia: this.props.location.state.preferencia,
      comida: this.props.location.state.comida,
      animal: '',
    };

    this.hundleSelect = this.hundleSelect.bind(this);
  }

  hundleSelect(event) {    
    this.setState({
      animal: event.target.value,
    })
  }

  render() {
    const { nome, preferencia, comida, animal } = this.state;    
    return (   
        <div> 
          <h2>Escolha um animal:</h2> 
          <select onClick={ this.hundleSelect } >
            <option value="gato">Gato</option>
            <option value="cachorro">Cachorro</option>
          </select>      
          <Link to={{ pathname: "/manchete", state: { nome, preferencia, comida, animal }}}>
            <Botao />
          </Link>   
        </div>  
    );
  }
}  

export default Animal;