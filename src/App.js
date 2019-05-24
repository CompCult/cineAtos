import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Podem começar a trabalhar...
        </p>
        <h1>My puppets</h1>
        <a
          className="App-link"
          href="https://cineatos.herokuapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site base do administrador 
        </a>
        <h3>Agora vão trabalhar <b>!!!!!</b></h3>
      </header>
    </div>
  );
}

export default App;
