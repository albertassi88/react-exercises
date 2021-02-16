import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListaFilmes from './pages/ListaFilmes';
import DetalhesFilmes from './pages/DetalhesFilmes';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {       
   return (
      <div > 
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={ListaFilmes} />
            <Route path='/detalhes/:id' component={DetalhesFilmes} />                      
            <Route component={NotFound} /> 
          </Switch>        
        </BrowserRouter>            
      </div>
    );
  }
}

export default App;
