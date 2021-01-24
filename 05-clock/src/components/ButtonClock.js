import React from 'react';
import Clock from './Clock';

class ButtonClock extends React.Component {
    constructor() {
        super();

        this.state = {
            turnOf: true, 
        }
       
    }

    hundleButton = () => {
      //  const { turnOf } = this.state;
        console.log('oi');
        // this.setState({
        //     turnOf: !turnOf,
        // })
    }

    render() {    
         
        return(
            <div>
                {<Clock propsButton={ this.hundleButton }/>}
            </div>
        );
    }
}

export default ButtonClock;