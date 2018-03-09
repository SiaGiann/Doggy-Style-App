import * as request from 'superagent'
import { CHANGE_IMAGE } from './types'

const baseUrl = 'http://localhost:4001'

export const dogImage = () => (dispatch) => {
  request
    .get(`${baseUrl}/getdog`)
    .then(response => dispatch({
      type: CHANGE_IMAGE,
      payload: response.body
    }))
    .catch(err => alert(err))
}
