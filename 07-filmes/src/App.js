import React from 'react';
import Um from './components/Um';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
  }

  hundleOi = () => {
    console.log('oi');
  }

  render() {   
   return (
      <div className="App">        
        <Um nome={this.hundleOi}/>
      </div>
    );
  }
}

export default App;
