import * as request from 'superagent'
import { FETCH_DOG } from './types'

const baseUrl = 'http://localhost:4001'

export const fetchDog = () => (dispatch) => {
  request
    .get(`${baseUrl}/getdog`)
    .then(response => dispatch({
      type: FETCH_DOG,
      payload: response.body
    }))
    .catch(err => alert(err))
}
