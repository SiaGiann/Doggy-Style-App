import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Like from './like'
import Dislike from './dislike'

class Picture extends PureComponent {
  render() {
    const { imageUrl } = this.props

    return (
      <div className="dogImage">
        <img src={imageUrl} />
        <Like />
        <Dislike />
      </div>
    )
  }
}

export default Picture
