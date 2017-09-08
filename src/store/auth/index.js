import { handleActions } from 'redux-actions'
import { updateLoggedUser } from './actions'

const initialState = {
  isLogged: false,
  loggedUser: null
}

const reducer = handleActions({
  [updateLoggedUser](state, { payload }) {
    return {
      isLogged: payload,
      logged: !!payload
    }
  },
}, initialState)

export default reducer
