import { createActions } from 'redux-actions'

import { sketchStatus } from '../../constants'

import { Rooms } from '../collections'
import { getKey } from '../room'

import { getSketch } from './index'

const { setSize, setColor, setPosition, setDrawingStatus } = createActions({
  SET_SIZE: size => size,
  SET_COLOR: color => color,
  SET_POSITION: position => position,
  SET_DRAWING_STATUS: status => status
})

const makeUpdate = changes => (dispatch, getState) =>
  Rooms.update(`${getKey(getState())}/drawing`, changes)

const updateSize = size => [
  setSize(size),
  makeUpdate({ size }),
]

const updateColor = color => [
  setColor(color),
  makeUpdate({ color }),
]

const updatePosition = position => [
  setPosition(position),
  makeUpdate({ position }),
]

const updateDrawingStatus = status => [
  setDrawingStatus(status),
  makeUpdate({ status }),
]

const startDrawing = () => dispatch =>
  dispatch(updateDrawingStatus(sketchStatus.DRAWING))

const stopDrawing = () => dispatch =>
  dispatch(updateDrawingStatus(sketchStatus.IDLE))

const listenForDrawingUpdates = () => (dispatch, getState) => {
  Rooms.sub(getKey(getState())).listenFor('child_changed', update => {
    const { color, status, position, size } = getSketch(getState())

    if (update.color !== color)
      dispatch(setColor(update.color))

    if (update.size !== size)
      dispatch(setSize(update.size))

    if (update.position.x !== position.x && update.position.y !== position.y)
      dispatch(setPosition(update.position))

    if (update.status !== status)
      dispatch(updateDrawingStatus(update.status))
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
  startDrawing,
  stopDrawing,
  listenForDrawingUpdates,
}
