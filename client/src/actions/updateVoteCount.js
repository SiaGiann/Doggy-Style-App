import { VOTE_COUNT } from './types'

export const dogVote = (userID, dogBreed) => {
  return {
    type: VOTE_COUNT,
    payload: {
      userID,
      dogBreed
    }
  }
}
