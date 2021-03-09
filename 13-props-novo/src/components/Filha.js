import React from 'react';

class Filha extends React.Component {
  render() {

    return (
      <div>
        <span>
          Tenho uma herança de R$ {this.props.inheritance} que recebi do meu bisavô.
        </span>
        <button type="button" onClick={this.props.spendInheritance}>Gastar</button> 
      </div>
    );
  }
}

export default Filha;