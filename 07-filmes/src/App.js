import React from 'react';
import Cabecalho from './components/Cabecalho';

import './App.css';


class App extends React.Component {
  constructor() {
    super();
  }  

  render() {       
   return (
      <div className="App"> 
        <Cabecalho />        
      </div>
    );
  }
}

export default App;
