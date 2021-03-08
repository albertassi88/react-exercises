import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product_Api from './pages/Product_Api';
import Product_Details from './pages/Product_Details';
import Shopping_Cart from './pages/Shopping_Cart';

class App extends React.Component {
  render() {
    return (
      <div >
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={ Home }/>
            <Route path='/:nome/details' component={ Product_Details } />
            <Route path='/shoppingcart' component={ Shopping_Cart } />
            <Route path='/:nome' component={ Product_Api } />
          </Switch>        
        </BrowserRouter>       
      </div>
    );
  }
}

export default App;
