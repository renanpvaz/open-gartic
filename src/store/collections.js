import firebase from 'firebase'
import createCollection from '../util/create-collection'

const Games = createCollection(firebase, '/games')
const Players = createCollection(firebase, '/players')

// {
//   games: {
//     test: {
//       words: [],
//       maxUsers: 5,
//       drawingTurn: 'ronaldo',
//       sketch: {
//         status: 'sketch_IDLE',
//         position: { x: 0, y: 0 },
//         color: 'black',
//         thickness: 1
//       }
//     }
//   },
//
//   players: {
//     test: {
//       ronaldo: {
//         points: 5
//       },
//       cleyson: {
//         points: 10
//       },
//     },
//     'other-room': {
//
//     }
//   },
//
//   guesses: {
//     test: {
//       g1: {
//         message: 'monkey',
//         sentAt: 1442536987
//       },
//       g2: {
//         message: 'donkey',
//         sentAt: 1442536999
//       }
//     }
//   }
// }

export {
  Games,
  Players
}
