import React from 'react';
import cores from './data';
import TagsCores from './TagsCores';    


class ArrayCores extends React.Component {
  render() {
    return (
      cores.map(cor => <TagsCores key={cor.value} color={cor}/>)
    );
  }
}

export default ArrayCores;