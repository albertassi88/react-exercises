import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Index from './pages/Index';

class App extends React.Component {
  render() { 
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/index" component={ Index } />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
