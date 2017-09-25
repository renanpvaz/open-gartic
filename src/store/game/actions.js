import { createActions } from 'redux-actions'

import { gameStatus } from '../../constants'

import { Players, Games } from '../collections'
import { getUserUid } from '../auth'

const { loadGame, playerJoined, playerLeft } = createActions({
  LOAD_GAME: game => game,
  PLAYER_JOINED: newPlayer => newPlayer,
  PLAYER_LEFT: uid => uid,
})

const findGame = name => dispatch =>
  Games.findOne(name).then(loadGame).then(dispatch)

const createGame = newGame =>
  (dispatch, getState) => Games.persist(newGame.name, {
    ...newGame,
    owner: getUserUid(getState()),
    status: gameStatus.IDLE,
  })

const joinGame = gameName => (dispatch, getState) => {
  const uid = getUserUid(getState())

  return Players.child(gameName).persist(uid, {
    uid,
    joinedAt: (new Date()).getTime(),
    points: 0,
  })
}

const leaveGame = name => (dispatch, getState) =>
  Players.child(name).delete(getUserUid(getState()))

const listenForPlayerConnections = gameName => dispach =>
  Players.child(gameName)
    .listenFor('child_added', player => dispach(playerJoined(player)))
    .listenFor('child_removed', player => dispach(playerLeft(player.uid)))

export {
  loadGame,
  findGame,
  joinGame,
  leaveGame,
  createGame,
  playerJoined,
  playerLeft,
  listenForPlayerConnections,
}
