import React from 'react';
import './css/App.css';

function App() {

  const handleChecked = (event) => {
    const { parentNode } = event.target;
    const { checked } = event.target;
    if (checked) {
      parentNode.childNodes[1].className = 'completed';
    } else {
      parentNode.childNodes[1].className = '';
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        id="nome1"
        name="nome1"
        onClick={ handleChecked }
      />
      <label htmlFor="nome1">Nome 1</label>
    </div>
  );
}

export default App;
