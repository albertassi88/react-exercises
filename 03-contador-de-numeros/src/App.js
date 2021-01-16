import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numero: 0
    }
  }

  handleClick = () => {
    this.setState((estadoAnterior,_props) => ({
      numero: estadoAnterior.numero + 1
    }))
  }

  render() {
    return <button onClick={this.handleClick}>{this.state.numero}</button>;
  }
}

export default App;
