import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      timer: 30,
      countingDown: false,
    };
    
    this.startTimer = this.startTimer.bind(this);
  }

  componentDidMount() {
    this.startTimer();
  }
  
  startTimer() {
    const { countingDown } = this.state;
    const ONE_SECOND = 1000;
    if (!countingDown) {
      this.setState({ countingDown: true });
      setInterval(() => {      
        const { timer } = this.state;     
        if (timer > 0) {
          this.setState({ timer: timer - (ONE_SECOND / ONE_SECOND) });
          return;
        }
      }, ONE_SECOND);
    }
  }
  render() {
    const { timer } = this.state;

    return (
      <div>
        Tempo:
        {' '}
        {timer}
      </div>
    );
  }
}

export default App;
