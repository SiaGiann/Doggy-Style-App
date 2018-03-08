import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Like from './like'
import Dislike from './dislike'
import imageUrl from './cutie.jpeg'
import './display_picture.css'
import { dogVote } from '../actions/update_vote_count'
import { connect } from 'react-redux'
import { fetchDog } from '../actions/fetchDog'


class Picture extends PureComponent {
  static PropTypes = {
    dogs: PropTypes.string.isRequired
  }

  componentWillMount() {
    this.props.fetchDog(this.props.match.params.url)
  }

  render() {
    const { dogs } = this.props.fetchDog(this.props.match.params.url)
    console.log(dogs)
    return (
      <div className="imageBox">
        <img className="dogImage" src={ dogs } />
        <div className="buttonBox">
          <Dislike />
          <Like handleClick={ dogVote }/>
        </div>
      </div>
    )
  }
}

Picture.defaultProps = {
  image: imageUrl
}

const mapStateToProps = ({ dogs }) => ({ dogs })

export default connect(mapStateToProps, { fetchDog })(Picture)
