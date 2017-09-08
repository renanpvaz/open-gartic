import { createActions, handleActions, combineActions } from 'redux-actions'

const defaultState = {
  players: {},
  isOwner: false,
  timeToDraw: '',
  numberOfUsers: '',
}

const { loadRoom, playerJoined } = createActions({
  LOAD_ROOM: room => ({ room }),
  PLAYER_JOINED: newPlayer => ({ newPlayer }),
})

const reducer = handleActions({
  [loadRoom](state, { payload: { room } }) {
    return { ...state, ...room }
  },
  [playerJoined](state, { payload }) {
    console.log(payload);
    return {
      ...state,
      players: {
        ...state.players,
        [payload.uid]: payload
      }
    }
  }
}, defaultState)

export default reducer
