import React from 'react';
import cores from './data';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: ""
    }
  }

  hundleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {  
    const { inputValue } = this.state;  
    return (
      <main>
        <input type="text" onChange={this.hundleChange}/>
        <ul>
          {cores.filter(cor => cor.name.includes(inputValue)).map(cor => 
            <li key={cor.value}>
              <div style={{ backgroundColor: cor.value }} className="cor-square"/>
              {cor.name}
            </li>)}
        </ul>
      </main>
    )   
  }
}

export default App;
