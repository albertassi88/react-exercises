import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();

    this.state = {
      date: new Date(),
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(() => ({
        date: new Date(),
      }));
    }, 1000) 
  }

  render() {
    const { date } = this.state;
    const { propsButton } = this.props; 
    return (
      <section>
        <div className="App">
          <p>Relógio</p>
          <h1>{date.toLocaleTimeString()}</h1>
          

          <button type="button" onClick={ propsButton }>Botão</button>
          
        </div>
      </section>
    );
  }
}

export default Clock;
