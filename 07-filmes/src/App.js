import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    const { arrayProps } = this.props;
   return (
      <div className="App">
           
        <h2>{arrayProps}</h2>

      </div>
    );
  }
}

export default App;
