import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import Picture from './components/displayPicture'
import './top_10_button.css'

export class Button extends PureComponent {
  static PropTypes = {
    onClick: PropTypes.func.isRequired
  }

  // handleClick = (event) => {
  //   // event.preventDefault();
  //   this.props.showRank();
  // }

  render() {
    return (
      <button onClick={this.handleClick}
      className="topTenButton">
        Doggy Rank
      </button>
    )
  }
}

export default Button
