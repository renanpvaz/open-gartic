import { handleActions } from 'redux-actions'

import { sketchStatus } from '../../constants'

import { setColor, setPosition, setSize, setDrawingStatus } from './actions'

const initialState = {
  color: 'black',
  position: { x: 0, y: 0 },
  size: '32',
  status: sketchStatus.IDLE
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
  [setDrawingStatus](state, { payload }) {
    return { ...state, status: payload }
  },
}, initialState)

const getSketch = state => state.sketch
const getSize = state => getSketch(state).size
const getColor = state => getSketch(state).color
const getPosition = state => getSketch(state).position
const isDrawing = state => getSketch(state).status === sketchStatus.DRAWING

export {
  getSketch,
  getSize,
  getColor,
  getPosition,
  isDrawing,
}
export default reducer
