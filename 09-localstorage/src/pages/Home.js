import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
    };

    this.saveLocalStorage = this.saveLocalStorage.bind(this);
  }

  saveLocalStorage(e) {
    localStorage.setItem('nome', JSON.stringify(this.state));    
    this.props.history.push('/index'); // history.push é como se fosse o Link
  }  

  render() { 
    return (
      <div>
        <input onChange={(e) => this.setState({nome: e.target.value})} placeholder="Digite o seu nome:"></input>
        <button onClick={ this.saveLocalStorage }>Confirmar</button>
      </div>
    );
  }
}

export default Home;
