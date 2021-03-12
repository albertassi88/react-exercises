import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';

import './App.css'; 

class App extends React.Component {  
    render() {       
        return(
            <>
              <BrowserRouter>
                  <Navbar />
                  <Switch>
                      <Route exact path="/" component={ Home } />
                      <Route path="/products" component={ Products } />
                      <Route path="/reports" component={ Reports} />
                  </Switch>
              </BrowserRouter>
            </>
        );
    }
} 

export default App;