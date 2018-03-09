import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {login} from '../actions/users'
import LoginForm from './LoginForm'
import {Redirect} from 'react-router-dom'
import './LoginPage.css';
import LogoImg from './dog.png';

class LoginPage extends PureComponent {
	handleSubmit = (data) => {
		this.props.login(data.email, data.password)
		console.log(data)
	}

	render() {
		if (this.props.currentUser) return (
			<Redirect to="/" />
		)

		return (
			<div className="Page">
        <header className="Header">
          <img src={LogoImg} className="Logo" alt="logo" />
          <h1 className="Title">Doggy Style</h1>
        </header>
				<div className="Login">
					<h1>Dogin</h1>

					<LoginForm onSubmit={this.handleSubmit} />
					</div>
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		currentUser: state.currentUser
	}
}

export default connect(mapStateToProps, {login})(LoginPage)
