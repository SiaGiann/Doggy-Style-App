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
      <div className="likeButton">
          <img src={LikeImg} onClick={this.props.handleClick}/>
      </div>
    );
  }
}

export default Like
// connect(null, { userInput })(Input);
