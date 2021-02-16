import React from 'react';
import '../components/header.css';

class Header extends React.Component {
    render() {
        return(
            <div className='container-header'>
                <h1>Filmes</h1>
            </div>
        );
    }
}

export default Header;