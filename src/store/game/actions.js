import { createActions } from 'redux-actions'
import { Rooms } from '../collections'

const { setSize, setColor, setPosition } = createActions({
  SET_SIZE: size => size,
  SET_COLOR: color => color,
  SET_POSITION: position => position,
})

const updateSize = size => (dispatch, getState) => {
  dispatch(setSize(size))
  // FIXME create thunk just for this
  Rooms.update(`${getState().room.key}/drawing`, { size })
}

const updateColor = color => (dispatch, getState) => {
  dispatch(setColor(color))
  Rooms.update(`${getState().room.key}/drawing`, { color })
}

export {
  setSize,
  setColor,
  setPosition,
  updateSize,
  updateColor,
}
