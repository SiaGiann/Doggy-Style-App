import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './dislike.css'
import DislikeImg from './paw-bad.png'
import { connect } from 'react-redux'


class Like extends PureComponent {
  static PropTypes = {
    onClick: PropTypes.func.isRequired
  }

  handleClick = (event) => {
    // event.preventDefault();
    this.props.userInput(event.target.value);
    // event.target.value = ''
  }


render() {
    return(
      <div className="dislikeButton">
          <img src={DislikeImg} onClick={this.props.handleClick}/>
      </div>
    );
  }
}

export default Like
// connect(null, { userInput })(Input);
