import React from 'react';
import './App.css';

class App extends React.Component {
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
      <div className="App">
       <h1 >{date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default App;
