import React from 'react';

class TagsApp extends React.Component {
  render() {
      const { nome, codigo } = this.props.cor;
    return (
        <div>
            <h1>{nome}</h1>
            <h2>{codigo}</h2>
        </div>    
    )
  }
}

export default TagsApp;