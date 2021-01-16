import React from 'react';

class TagsCores extends React.Component {
  render() {
    const { name, value } = this.props.color;
    return (
     <div>
      <h1>{name}</h1>
      <h1>{value}</h1>
     </div>
    )   
  }
}

export default TagsCores;
