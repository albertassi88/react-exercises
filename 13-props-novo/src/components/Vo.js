import React from 'react';
import Pai from './Pai';

class Vo extends React.Component {
  render() {
   
    return (
      <Pai
        inheritance={this.props.inheritance}
        spendInheritance={this.props.spendInheritance}
      />
    );
  }
}

export default Vo;
