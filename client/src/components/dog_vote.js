import React, { Component } from 'react';
import LogoImg from './dog.png';
import './App.css';
import Picture from './components/display_picture'
import Button from './components/top_10_button'

class dogSwipe extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={LogoImg} className="App-logo" alt="logo" />
          <h1 className="App-title">Doggy Style</h1>
        </header>
        <div className="Votes">
          <Picture />
          <Button />
        </div>
      </div>
    );
  }
}

export default dogSwipe
