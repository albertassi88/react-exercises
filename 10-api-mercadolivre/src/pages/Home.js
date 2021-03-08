import React from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            produto: '',
        };

        this.hundleInput = this.hundleInput.bind(this);
    }

    hundleInput(event) {
        this.setState({
            produto: event.target.value,
        });
    }    

    render() { 
        const { produto } = this.state;     
        return (
            <div className="container_home">
               <input onChange={ this.hundleInput } placeholder="Buscar produtos..."></input>
               <Link to={{ pathname: `/${produto}`, state: { produto } }} >
                <button>Confirmar</button>
               </Link>               
            </div>
        );
    }
}

export default Home;
