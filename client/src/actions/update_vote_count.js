import { VOTE_COUNT } from './types'

export const dogVote = (choice) => {
  return {
    type: VOTE_COUNT,
    payload: choice
  }
}
