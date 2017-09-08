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
        [payload.id]: payload
      }
    }
  }
}, initialState)

const getRoom = state => state.room
const getPlayers = state => Object.values(state.room.players)

export {
  getRoom,
  getPlayers,
}

export default reducer
