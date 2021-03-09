import React from 'react';
import Vo from './Vo';

class Bisavo extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        money: 1000000,
      }

      this.spendInheritance = this.spendInheritance.bind(this);
    }
  
    spendInheritance() {
      this.setState((prevState) => (
        { money: prevState.money - 1000 }
      ));
    }
  
    render() {  
      return (
        <Vo
          inheritance={this.state.money}
          spendInheritance={this.spendInheritance}
        />
      );
    }
  }

export default Bisavo;
