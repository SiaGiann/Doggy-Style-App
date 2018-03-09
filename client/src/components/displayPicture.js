import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Like from './like'
import Dislike from './dislike'
import imageUrl from './cutie.jpeg'
import './displayPicture.css'
import { dogVote } from '../actions/updateVoteCount'
import { connect } from 'react-redux'
import { fetchDog } from '../actions/fetchDog'



class Picture extends PureComponent {
  static PropTypes = {
    dogs: PropTypes.string.isRequired
  }

  componentWillMount() {
    this.props.fetchDog()
  }


  render() {
    const { dogs } = this.props
    return (
      <div className="imageBox">
        <img className="dogImage" src={ dogs.url } />
        <div className="buttonBox">
          <Dislike />
          <Like />
        </div>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    dogs: state.dogs,
    // currentUser: state.currentUser
  }
}

// const mapStateToProps = ({ dogs, currentUser }) => ({ dogs, currentUser })

export default connect(mapStateToProps, { fetchDog })(Picture)
