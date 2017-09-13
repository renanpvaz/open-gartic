import { createActions } from 'redux-actions'
import { Players, Rooms } from '../collections'

import { getLoggedUserUid } from '../auth'

const { loadRoom, playerJoined, playerLeft } = createActions({
  LOAD_ROOM: room => room,
  PLAYER_JOINED: newPlayer => newPlayer,
  PLAYER_LEFT: uid => uid,
})

const findRoom = name => dispatch =>
  Rooms.findOne(name).then(room => dispatch(loadRoom(room)))

const createRoom = newRoom => (dispatch, getState) => Rooms.persist(
  newRoom.name,
  {
    ...newRoom,
    owner: getLoggedUserUid(getState()),
    status: 'IDLE', // FIXME move to constants module
  }
)

const joinRoom = room => (dispatch, getState) => {
  const uid = getLoggedUserUid(getState())

  return Players.persist(uid, { uid, currentRoom: room })
}

const leaveRoom = () => (dispatch, getState) =>
  Players.persist(getLoggedUserUid(getState()), { currentRoom: null })

const listenForPlayerConnections = roomName => dispach => {
  const connectedPlayers = Players.ref()
    .orderByChild('currentRoom')
    .equalTo(roomName)

  connectedPlayers.on('child_added',
    snapshot => dispach(playerJoined(snapshot.val()))
  )

  connectedPlayers.on('child_removed',
    snapshot => dispach(playerLeft(snapshot.val().uid))
  )
}

export {
  loadRoom,
  findRoom,
  joinRoom,
  leaveRoom,
  createRoom,
  playerJoined,
  playerLeft,
  listenForPlayerConnections,
}
