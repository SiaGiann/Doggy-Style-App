import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './like.css'
import LikeImg from './paw-good.png'

class Like extends PureComponent {
  static PropTypes = {
    handleClick: PropTypes.func.isRequired
  }

  // handleClick = (event) => {
  //   // event.preventDefault();
  //   this.props.dogVote();
  //   // (event.target.value)
  // }


render() {
    return(
      <button className="likeButton" onClick={ this.props.onClick }>
          <img src={ LikeImg } />
      </button>
    );
  }
}

export default Like
// connect(null, { userInput })(Input);
