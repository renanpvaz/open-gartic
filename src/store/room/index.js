import { handleActions } from 'redux-actions'
import { loadRoom, playerJoined, playerLeft } from './actions'

import omit from '../../util/omit'
import { isLogged, getLoggedUserUid } from '../auth'

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
const getKey = state => getRoom(state).key
const getPlayers = state => Object.values(state.room.players)
const getOwner = state => getRoom(state).owner
const isOwner = state =>
  isLogged(state) && (getOwner(state) === getLoggedUserUid(state))

export {
  getRoom,
  getKey,
  getPlayers,
  getOwner,
  isOwner,
}

export default reducer
