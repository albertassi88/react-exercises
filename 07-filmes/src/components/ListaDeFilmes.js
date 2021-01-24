import React from 'react';
import Filmes from './componentes/Filmes';

class ListaDeFilmes extends React.Component {
  render() {
    const { movies } = this.props;
    console.log(movies)

    return (
      <div>
        { 
            movies.map((movie) => <Filmes key={ movie.title } movie={ movie } />) 
        }
      </div>
    );
  }
}

export default ListaDeFilmes;