import React from 'react';
import ReactDOM from 'react-dom';

// aqui estamos criando um componente
function Saudacao({ text }) {
  return (
    <h1>{text}</h1>
  )
}

// e depois renderizado essa bomba
ReactDOM.render(
  <Saudacao text="hello Word"></Saudacao>,
  document.getElementById('react-app')
)