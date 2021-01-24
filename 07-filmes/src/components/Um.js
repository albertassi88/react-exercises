import React from 'react';

class Um extends React.Component {    
  render() {    
    const { nome } = this.props;    
    return (
      <div className="App">
        
      <button onClick={nome}>Click</button>
      </div>
    );
  }
}

export default Um;
