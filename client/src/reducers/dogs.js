import { FETCH_DOG } from '../actions/types'

export default (state = {}, { type, payload } = {}) => {
  switch (type) {
    case FETCH_DOG:
      return payload

    default:
      return state
  }
}
