import { CHANGE_IMAGE } from './types'

export const dogImage = (imageURL, dogBreed) => {
  return {
    type: CHANGE_IMAGE,
    payload: {
      imageURL,
      dogBreed
    }
  }
}
