import { handleActions } from 'redux-actions'
import { updateLoggedUser } from './actions'

const initialState = {
  isLogged: false,
  loggedUser: null
}

const reducer = handleActions({
  [updateLoggedUser](state, { payload }) {
    return {
      loggedUser: payload,
      isLogged: !!payload
    }
  },
}, initialState)

const getLoggedUser = state => state.auth.loggedUser
const getLoggedUserUid = state => getLoggedUser(state).uid
const isLogged = state => state.auth.isLogged

export {
  isLogged,
  getLoggedUser,
  getLoggedUserUid
}

export default reducer
