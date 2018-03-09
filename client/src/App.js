import React, { Component } from 'react';
import LogoImg from './dog.png';
import './App.css';
import Picture from './components/displayPicture'
import Button from './components/top_10_button'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import dog_vote from './components/dog_vote'


class App extends Component {
  render() {
    return (
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
