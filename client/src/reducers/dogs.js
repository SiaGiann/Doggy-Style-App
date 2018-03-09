import { FETCH_DOG } from '../actions/types'
import { CHANGE_IMAGE } from '../actions/types'

export default (state = {}, { type, payload } = {}) => {
  switch (type) {
    case FETCH_DOG:
      return payload
    case CHANGE_IMAGE:
      return payload
    default:
      return state
  }
}
