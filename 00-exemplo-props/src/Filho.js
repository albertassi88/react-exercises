import React from 'react';

class Filho extends React.Component {
  render() {
    const { arrayProps } = this.props;
    return (
      <div className="App">
        <h1>{arrayProps}</h1>
      </div>
    );
  }
}

export default Filho;
