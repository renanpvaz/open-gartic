import { handleActions } from 'redux-actions'
import { loadGame, playerJoined, playerLeft } from './actions'

import omit from '../../util/omit'
import { isLogged, getUserUid } from '../auth'

const initialState = {
  players: {},
  isOwner: false,
  timeToDraw: '',
  numberOfUsers: '',
}

const reducer = handleActions({
  [loadGame](state, { payload }) {
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

const getGame = state => state.game
const getGameName = state => getGame(state).key
const getPlayers = state => Object.values(getGame(state).players)
const getOwner = state => getGame(state).owner
const isOwner = state =>
  isLogged(state) && (getOwner(state) === getUserUid(state))

export {
  getGame,
  getGameName,
  getPlayers,
  getOwner,
  isOwner,
}

export default reducer
