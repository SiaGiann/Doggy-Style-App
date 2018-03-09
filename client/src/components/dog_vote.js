import React, { Component } from 'react';
import LogoImg from './dog.png';
import './dog_vote.css';
import Picture from './display_picture'
import Button from './top_10_button'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class dogSwipe extends Component {
  render() {
      if (this.props.currentUser) { return (
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
    else {
      return <p>Please <Link to="/login">login</Link></p>
    }
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default connect(mapStateToProps)(dogSwipe)
