import React, { Component } from 'react';
import LogoImg from './dog.png';
import './dog_vote.css';
import Picture from './displayPicture'
import Button from './top_10_button'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import BouncerImg from './bouncer.jpeg'

class dogSwipe extends Component {
  render() {
      if (this.props.currentUser) { return (
      <div className="Page">
        <header className="Header">
          <img src={ LogoImg } className="Logo" alt="logo" />
          <h1 className="Title">Doggy Style</h1>
        </header>
        <div className="Votes">
          <Picture />
          <Button />
        </div>
      </div>
    );
  }
    else {
      return (
      <div className="Page">
        <header className="Header">
          <img src={LogoImg} className="Logo" alt="logo" />
          <h1 className="Title">Doggy Style</h1>
        </header>
        <img className="Image" src={ BouncerImg } />
        <p className="Link">Please <Link to="/login">dogin</Link>!</p>
      </div>
    )}
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default connect(mapStateToProps)(dogSwipe)
