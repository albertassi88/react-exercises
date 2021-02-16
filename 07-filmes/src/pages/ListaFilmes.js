import React from 'react';
import data from '../dataFilmes';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../css/listafilmes.css';

class ListaFilmes extends React.Component {
    constructor() {
        super();

        this.state = {
            filmes: [],
        };
    }

    componentDidMount() {
        this.setState({
            filmes: data,
        });
    }

    render() {
        const { filmes } = this.state;                
        return(
            <div className="container">
                <Header />
                <ul>
                    {filmes.map(filme => (
                        <li>
                            <div className="container-box">
                                <img key={filme.title} src={filme.imagePath}/>
                                <h3>{filme.title}</h3>
                                <h5>{filme.storyline}</h5>                                             
                                <Link to={{pathname: `/detalhes/${filme.id}`, state: { filme } }} >Ver Detalhes</Link>        
                            </div>
                        </li>   
                    ))}
                </ul>
            </div>
        );
    }
}

export default ListaFilmes;