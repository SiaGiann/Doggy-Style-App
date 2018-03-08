import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Like from './like'
import Dislike from './dislike'
import imageUrl from './cutie.jpeg'
import './display_picture.css'

class Picture extends PureComponent {
  render() {
    // const { imageUrl } = this.props

    return (
      <div className="imageBox">
        <img className="dogImage" src={imageUrl} />
        <div className="buttonBox">
          <Dislike />
          <Like />
        </div>
      </div>
    )
  }
}

export default Picture
