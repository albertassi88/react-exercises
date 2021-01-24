import React from 'react';
import Clock from './Clock';

class ButtonClock extends React.Component {
    constructor() {
        super();

        this.state = {
            turnOf: true, 
            value: 'Fechar Relógio',
        }    
        this.hundleButton = this.hundleButton.bind(this);   
    }

    hundleButton() {
       const { turnOf, value } = this.state;      
      
        this.setState({
            turnOf: !turnOf, // turnOf === true ? false : true
            value: value === 'Fechar Relógio' ? 'Abrir Relógio' : 'Fechar Relógio',
        })
    }

    render() {  
        const { turnOf, value } = this.state;         
         
        return(
            <div>
                <Clock propsButton={this.hundleButton} stateTurnOf={ turnOf } 
                stateValue={ value }/>
            </div>
        );
    }
}

export default ButtonClock;