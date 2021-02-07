import React from 'react';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
    };

    this.loadLocalStorage = this.loadLocalStorage.bind(this);
  }

  loadLocalStorage() {
    const nome = JSON.parse(localStorage.getItem('nome'));
    this.setState(nome);
  }

  render() { 
    const { nome } = this.state;
    return (
      <div>
        <button onClick={ this.loadLocalStorage } >Aperte</button>
        <h2>{nome}</h2>
      </div>
    );
  }
}
export default Index;
