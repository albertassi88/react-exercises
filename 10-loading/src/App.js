import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product_Api from './pages/Product_Api';

class App extends React.Component {
  render() {
    return (
      <div >
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={ Home }/>       
            <Route path='/:nome' component={ Product_Api } />
          </Switch>        
        </BrowserRouter>       
      </div>
    );
  }
}

export default App;
