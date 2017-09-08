import firebase from 'firebase'
import createCollection from '../util/create-collection'

const Rooms = createCollection(firebase, '/rooms')
const Players = createCollection(firebase, '/players')

export {
  Rooms,
  Players
}
