import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Like from './like'
import Dislike from './dislike'
import imageUrl from './cutie.jpeg'
import './display_picture.css'
import { dogVote } from '../actions/update_vote_count'
import { connect } from 'react-redux'
import { fetchDog } from '../actions/fetchDog'
import {Link} from 'react-router-dom'


class Picture extends PureComponent {
  static PropTypes = {
    dogs: PropTypes.string.isRequired
  }

  componentWillMount() {
    this.props.fetchDog()
  }

  render() {
    const { dogs } = this.props
    console.log(dogs[0])
    if (this.props.currentUser) { return (
      <div className="imageBox">
        <img className="dogImage" src={ dogs[0] } />
        <div className="buttonBox">
          <Dislike />
          <Like handleClick={ dogVote }/>
        </div>
      </div>
    )}
    else {
      return <p>Please login</p>
    }
  }
}


Picture.defaultProps = {
  image: imageUrl
}

const mapStateToProps = function (state) {
  return {
    dogs: state.dogs,
    currentUser: state.currentUser
  }
}

// const mapStateToProps = ({ dogs, currentUser }) => ({ dogs, currentUser })

export default connect(mapStateToProps, { fetchDog })(Picture)
