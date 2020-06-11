import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/Container.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Exchange Rates Over Time</h1>
      </header>
      <body>
      <Container />
      </body>
    </div>
  );
}

export default App;
