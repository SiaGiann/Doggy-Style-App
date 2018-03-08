import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './like.css'
import LikeImg from './paw-good.png'
import { connect } from 'react-redux'
import { dogVote } from '../actions/update_vote_count'


class Like extends PureComponent {
  static PropTypes = {
    onClick: PropTypes.func.isRequired
  }

  handleClick = (event) => {
    // event.preventDefault();
    this.props.dogVote(event.target.value);
    // event.target.value = ''
  }


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
