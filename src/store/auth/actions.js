import firebase from 'firebase'
import { createActions } from 'redux-actions'

const { updateLoggedUser } = createActions({
  UPDATE_LOGGED_USER: loggedUser => ({ uid: loggedUser.uid }),
})

const authenticate = () => () => firebase.auth().signInAnonymously()

const listenForAuthState = () => dispatch => firebase.auth().onAuthStateChanged(
  user => dispatch(updateLoggedUser(user))
)

export {
  updateLoggedUser,
  authenticate,
  listenForAuthState
}
