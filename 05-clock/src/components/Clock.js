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
    this.intervalId = setInterval(() => {  
      this.setState(() => ({
        date: new Date(),
      }));
    }, 1000) 
  } 

  render() {
    const { date } = this.state;
    const { propsButton } = this.props; 
    const { stateTurnOf, stateValue } = this.props; 
         
    return (
      <section>
        <div className="App">
          <h2>Relógio</h2>
          {
            stateTurnOf && <h1>{date.toLocaleTimeString()}</h1>                     
          }          
          <button type="button" onClick={propsButton}>{stateValue}</button>          
        </div>
      </section>
    );
  }
}

export default Clock;
