import { createActions } from 'redux-actions'
import { Players, Rooms } from '../collections'

import { getLoggedUserUid } from '../auth'

const { loadRoom, playerJoined } = createActions({
  LOAD_ROOM: room => ({ room }),
  PLAYER_JOINED: newPlayer => ({ newPlayer }),
})

const findRoom = name => dispatch =>
  Rooms.findOne(name).then(room => dispatch(loadRoom(room)))

const createRoom = newRoom => (dispatch, getState) => {
  debugger
  return Rooms.persist(
    newRoom.name,
    {
      ...newRoom,
      owner: getLoggedUserUid(getState()),
      status: 'IDLE',
    }
  )
}

const joinRoom = (name, user) => dispatch =>
  Players.persist(user.uid, { id: user.uid, currentRoom: name })

const listenForNewPlayers = () => dispach => Players.listenFor(
  'child_added',
  newPlayer => dispach(playerJoined(newPlayer))
)

export {
  loadRoom,
  findRoom,
  joinRoom,
  createRoom,
  playerJoined,
  listenForNewPlayers,
}
