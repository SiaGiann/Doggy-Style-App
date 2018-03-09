import React, { Component } from 'react';
import LogoImg from './dog.png';
import './App.css';
import Picture from './components/display_picture'
import Button from './components/top_10_button'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import dog_vote from './components/dog_vote'


class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={LogoImg} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Doggy Style</h1>
      //   </header>
      //   <div className="Votes">
      //     <Picture />
      //     <Button />
      //   </div>
      // </div>
      <Router>
        <div>
          <Route exact path="/login" component={ LoginPage } />
          <Route exact path="/swiping" component={ dog_vote } />
          <Route exact path="/" render={ () => <Redirect to="/swiping" /> } />
        </div>
      </Router>
    );
  }
}

export default App;
