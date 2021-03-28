import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
    };
  }

  sendData() {
    this.setState({
      name: '',
      email: '',
    }) 
  }

  render() {
    const { email, name } = this.state;

    return (
      <div>
        <form>
          <label>
            Nome
            <input         
              type="text"
              id="input-nome"
              value={ name }
              onChange={ (e) => this.setState({ name: e.target.value }) }
              placeholder="nome"
            />
          </label>
          <label>
            Email
            <input     
              value={ email }
              type="email"
              onChange={ (e) => this.setState({ email: e.target.value }) }
              placeholder="email"
            />
          </label>
        </form>
        <div>         
          <button       
            type="button"
            onClick={ () => this.sendData() }
            disabled={ !name || !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) }
          >
            Jogar
          </button>       
        </div>        
      </div>
    );
  }
}

export default Login;