import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cpf: '',
      celular: '',
      cep: '',
      cnj: '',
    };

    this.criaCPF = this.criaCPF.bind(this);
    this.criaCelular = this.criaCelular.bind(this);
    this.criaCnj = this.criaCnj.bind(this);
    this.criaCep = this.criaCep.bind(this);
    this.hundleOnChange = this.hundleOnChange.bind(this);
  }

  hundleOnChange({target: {name, value}}) {
    this.setState({
      [name]: value,
    });
  }

  criaCPF(cpf){  
    return cpf.replace(/[^\d]/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");     
  };

  criaCelular(celular){  
    return celular.replace(/[^\d]/g, "").replace(/[^\d]/g, "").replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");    
  };

  criaCep(cep){  
    return cep.replace(/[^\d]/g, "").replace(/(\d{5})(\d{3})/, "$1-$2"); 
  };

  criaCnj(cnj){  
    return cnj.replace(/[^\d]/g, "").replace(/(\d{7})(\d{2})(\d{4})(\d{1})(\d{2})(\d{4})/, "$1-$2.$3.$4.$5.$6");  
  };  
  
  render() {
  const { cpf, celular, cep, cnj } = this.state; 
  return (
      <div>         
        <p>Digite o CPF:</p>
        <input value={this.criaCPF(cpf)} name="cpf" maxlength="11" onChange={this.hundleOnChange}></input>     

        <p>Digite o Celular:</p>
        <input value={this.criaCelular(celular)} name="celular" maxlength="11" onChange={this.hundleOnChange}></input>

        <p>Digite o Cep:</p>
        <input value={this.criaCep(cep)} name="cep" maxlength="8" onChange={this.hundleOnChange}></input>  

        <p>Digite o Cnj:</p>
        <input value={this.criaCnj(cnj)} name="cnj" maxlength="20" onChange={this.hundleOnChange}></input>    
      </div>      
    );
  }
}

export default App;
