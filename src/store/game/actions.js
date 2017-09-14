import { createActions } from 'redux-actions'
import { Rooms } from '../collections'

const { setSize, setColor, setPosition, setDrawingStatus } = createActions({
  SET_SIZE: size => size,
  SET_COLOR: color => color,
  SET_POSITION: position => position,
  SET_DRAWING_STATUS: status => status
})

const makeUpdate = changes => (dispatch, getState) =>
  Rooms.update(`${getState().room.key}/drawing`, changes)

const updateSize = size => (dispatch, getState) => {
  dispatch(setSize(size))
  dispatch(makeUpdate({ size }))
}

const updateColor = color => (dispatch, getState) => {
  dispatch(setColor(color))
  dispatch(makeUpdate({ color }))
}

const updatePosition = position => (dispatch, getState) => {
  dispatch(setPosition(position))
  dispatch(makeUpdate({ position }))
}

const updateDrawingStatus = drawing => (dispatch, getState) => {
  dispatch(setDrawingStatus(drawing))
  dispatch(makeUpdate({ drawing }))
}

const listenForDrawingUpdates = () => (dispatch, getState) => {
  const { color, drawing, position, size } = getState().game

  Rooms.sub(getState().room.key).listenFor('child_changed', update => {
    if (update.color !== color)
      dispatch(setColor(update.color))

    // if (update.size !== size)
    //   dispatch(setSize(update.size))

    if (update.position.x !== position.x && update.position.y !== position.y)
      dispatch(setPosition(update.position))

    if (update.drawing !== drawing)
      dispatch(updateDrawingStatus(update.drawing))
  })
}

export {
  setSize,
  setColor,
  setPosition,
  setDrawingStatus,
  updateSize,
  updateColor,
  updatePosition,
  updateDrawingStatus,
  listenForDrawingUpdates,
}
