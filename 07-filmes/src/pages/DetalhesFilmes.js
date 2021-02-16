import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../css/detalhesFilmes.css';

class DetalhesFilmes extends React.Component {
    constructor(props) {
        super(props);

        const { location: { state: { filme } } }  = this.props;        

        this.state = {
            filmeDetalhe: filme,            
        };        
    }   

    render() {
        const { filmeDetalhe: { title, imagePath, storyline } } = this.state;                      
        return(
            <div>
                <Header />
                <div className='container-detalhes'>                               
                    <div className="detalhes">
                        <img src={imagePath}></img>
                        <h2>{title}</h2>
                        <p>{storyline}</p>             
                        <Link to="/">Voltar</Link>                
                    </div>
                </div>
            </div>            
        );
    }
}

export default DetalhesFilmes;