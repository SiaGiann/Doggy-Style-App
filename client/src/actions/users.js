import * as request from 'superagent'
import { USER_LOGIN_FAILED } from './types'
import { USER_LOGIN_SUCCESS } from './types'

const baseUrl = 'http://localhost:4001'

export const login = (email, password) => (dispatch) => {
	request
		.get(`${baseUrl}/logins`)
    .send({ email, password })
    .then(result => {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: result.body
      })
    })
    .catch(err => {
	    if (err.status === 400) {
		    dispatch({
			    type: USER_LOGIN_FAILED,
			    payload: err.response.body.message || 'Unknown error'
		    })
	    }
	    else {
		    console.error(err)
	    }
    })
}
