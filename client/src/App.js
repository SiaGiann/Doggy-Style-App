import React, { Component } from 'react';
import LogoImg from './dog.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={LogoImg} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Doggy Style</h1>
        </header>
      </div>
    );
  }
}

export default App;
