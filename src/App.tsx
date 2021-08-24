import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Where are you my conflicts
        </p>
      </header>
      <Button text='Hello'/>
    </div>
  );
}

export default App;