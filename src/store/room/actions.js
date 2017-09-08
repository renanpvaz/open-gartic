import { createActions } from 'redux-actions'
import { Players, Rooms } from '../collections'

const { loadRoom, playerJoined } = createActions({
  LOAD_ROOM: room => ({ room }),
  PLAYER_JOINED: newPlayer => ({ newPlayer }),
})

const findRoom = name => dispatch =>
  Rooms.findOne(name).then(room => dispatch(loadRoom(room)))

const joinRoom = (name, user) => dispatch =>
  Players.persist(user.uid, { uid: user.uid, currentRoom: name })

const listenForNewPlayers = () => dispach => Players.listenFor(
  'child_added',
  newPlayer => dispach(playerJoined(newPlayer))
)

export {
  loadRoom,
  playerJoined,
  findRoom,
  joinRoom,
  listenForNewPlayers,
}
