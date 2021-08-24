import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>Edit and save to reload.</p>
            </header>
            <Button text='Hello'/>
        </div>
    );
}

export default App;