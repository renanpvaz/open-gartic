import { handleActions } from 'redux-actions'
import { loadRoom, playerJoined, playerLeft } from './actions'

import omit from '../../util/omit'

const initialState = {
  players: {},
  isOwner: false,
  timeToDraw: '',
  numberOfUsers: '',
}

const reducer = handleActions({
  [loadRoom](state, { payload }) {
    return { ...state, ...payload }
  },
  [playerJoined](state, { payload }) {
    return {
      ...state,
      players: {
        ...state.players,
        [payload.uid]: payload
      }
    }
  },
  [playerLeft](state, { payload }) {
    return {
      ...state,
      players: omit(payload, state.players)
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
