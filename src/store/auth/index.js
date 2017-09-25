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

const getUser = state => state.auth.loggedUser
const getUserUid = state => getUser(state).uid
const getUserName = state => getUser(state).name
const isLogged = state => state.auth.isLogged

export {
  isLogged,
  getUser,
  getUserUid,
  getUserName,
}

export default reducer
