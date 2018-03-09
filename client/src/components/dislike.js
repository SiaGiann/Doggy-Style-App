import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './dislike.css'
import DislikeImg from './paw-bad.png'
// import { connect } from 'react-redux'
// import { dogImage } from '../actions/changePicture'


class Dislike extends PureComponent {
  static PropTypes = {
    onClick: PropTypes.func.isRequired
  }

  // handleClick = (event) => {
  //   // event.preventDefault();
  //   this.props.dogImage();
  //   // event.target.value = ''
  // }


render() {
    return(
      <div className="dislikeButton">
          <img src={ DislikeImg }/>
      </div>
    );
  }
}

export default Dislike
