import { handleActions } from 'redux-actions'

import { setColor, setPosition, setSize } from './actions'

const initialState = {
  color: 'black',
  position: { x: 0, y: 0 },
  size: 32
}

const reducer = handleActions({
  [setColor](state, { payload }) {
    return { ...state, color: payload }
  },
  [setPosition](state, { payload }) {
    return { ...state, position: payload }
  },
  [setSize](state, { payload }) {
    return { ...state, size: payload }
  },
}, initialState)

export default reducer
