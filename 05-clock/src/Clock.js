import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();

    this.state = {
      date: new Date(),
    };
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
    return (
      <section>
        <div className="App">
          <p>Relógio</p>
          <h1>{date.toLocaleTimeString()}</h1>
        </div>
      </section>
    );
  }
}

export default Clock;
