import React from 'react';
import cores from './data';
import TagsApp from './TagsApp';


class ArrayApp extends React.Component {
  render() {
    return (
        cores.map(cor => <TagsApp key={cor.codigo} cor={cor}/>)
    )
  }
}

export default ArrayApp;