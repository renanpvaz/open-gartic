import { handleActions } from 'redux-actions'
import { receiveGuess } from './actions'

const initialState = {
  list: []
}

const reducer = handleActions({
  [receiveGuess](state, { payload }) {
    return {
      ...state,
      list: [...state.list, payload]
    }
  }
}, initialState)

const getGuesses = state => state.guess.list

export {
  getGuesses,
}

export default reducer
