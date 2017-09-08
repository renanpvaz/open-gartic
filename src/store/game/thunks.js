import firebase from 'firebase'
import createCollection from '../../util/create-collection'

const Rooms = createCollection(firebase, '/rooms')
const Players = createCollection(firebase, '/players')

const findRoom = name => dispatch =>
  Rooms.findOne(name).then(room => dispatch({ type: 'LOAD_ROOM', payload: room }))

const joinRoom = (name, user) => dispatch =>
  Players.persist(user.uid, { uid: user.uid, currentRoom: name })

const listenForNewPlayers = () => dispach => Players.listenFor(
  'child_added',
  newPlayer => dispach({ type: 'PLAYER_JOINED', payload: newPlayer })
)

export {
  findRoom,
  joinRoom,
  listenForNewPlayers
}
