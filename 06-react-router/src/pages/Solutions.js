import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Solutions extends React.Component {
    render() {
        const { availableSolutions } = this.props;
        return(  
            <section>
                <ul>       
                    {availableSolutions.map((solution) => (
                        <li key={ solution }>
                            <Link to={`/solutions/${solution}`}>{solution}</Link>
                        </li>
                    ))}
                </ul>
            </section>
        );
               
    }
}

Solutions.propTypes = {
    availableSolutions: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Solutions;