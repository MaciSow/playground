import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>We need do sth with main page</p>
            </header>
            <Button text='Hello'/>
        </div>
    );
}

export default App;