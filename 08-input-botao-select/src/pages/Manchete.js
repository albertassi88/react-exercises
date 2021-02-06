import React from 'react';
import '../pages-css/manchete.css';

class Manchete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: this.props.location.state.nome,
      preferencia: this.props.location.state.preferencia,
      comida: this.props.location.state.comida,
      animal: this.props.location.state.animal,     
    }
  }

  render() {
    const { nome, preferencia, comida, animal } = this.state;    
    return (
      <div className="container">
        <main className="container-manchete">
          <section>
            <h1>Gerando a treta</h1>
            { 
              comida === "Sopa"
              ? <p>Em entrevista internacional, 
                <b> {nome} </b> teve que debater sobre a discussão mais acirrada do século, é biscoito ou bolacha? 
                <b> {nome} </b> foi direto na canela dizendo que o certo é <b>{preferencia}</b>! E ainda complementou que <b>sopa não é janta </b> 
                e que nem seu <b>{animal}</b> come!</p>
              : <p><em>Em entrevista internacional, 
                <b> {nome} </b> teve que debater sobre a discussão mais acirrada do século, é biscoito ou bolacha? 
                <b> {nome} </b> foi direto na canela dizendo que o certo é <b> {preferencia}</b>! E ainda complementou que <b> {comida} é ruim </b>
                e que nem seu <b>{animal}</b> come!</em></p>
            }
          </section>
        </main>
      </div>   
    );
  }
}

export default Manchete;