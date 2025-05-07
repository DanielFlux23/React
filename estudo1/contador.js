import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Contador() {
  const [contador, setContador] = useState(0);
  
  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={() => setContador(contador + 1)}>+1</button>
    </div>
  );
}

ReactDOM.render(
  <Contador />,
  document.getElementById('react-app')
);