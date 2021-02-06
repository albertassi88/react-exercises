import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Animal from './pages/Animal';
import Comida from './pages/Comida';
import Preferencia from './pages/Preferencia';
import Manchete from './pages/Manchete';

import './App.css';

class App extends React.Component {
  render() {
    return (   
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/preferencia" component={ Preferencia } />
            <Route path="/comida" component={ Comida } />
            <Route path="/animal" component={ Animal } />
            <Route path="/manchete"  component={ Manchete } />
          </Switch>
        </BrowserRouter>
      </div>            
    );
  }
}

export default App;