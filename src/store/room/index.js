import { handleActions } from 'redux-actions'
import { loadRoom, playerJoined } from './actions'

const initialState = {
  players: {},
  isOwner: false,
  timeToDraw: '',
  numberOfUsers: '',
}

const reducer = handleActions({
  [loadRoom](state, { payload: { room } }) {
    return { ...state, ...room }
  },
  [playerJoined](state, { payload }) {
    return {
      ...state,
      players: {
        ...state.players,
        [payload.uid]: payload
      }
    }
  }
}, initialState)

export default reducer