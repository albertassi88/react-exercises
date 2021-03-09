import React from 'react';
import Filha from './Filha';

class Pai extends React.Component {
  render() {
 
    return (
      <Filha
        inheritance={this.props.inheritance}
        spendInheritance={this.props.spendInheritance}
      />
    );
  }
}

export default Pai;