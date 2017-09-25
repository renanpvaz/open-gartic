import { createActions } from 'redux-actions'

import { getUserName } from '../auth'
import { getGameName } from '../game'
import { Guesses } from '../collections'

const { receiveGuess } = createActions({
  RECEIVE_GUESS: guess => guess
})

const makeGuess = guess => (dispatch, getState) =>
  Guesses.child(getGameName(getState())).create({
    text: guess,
    user: getUserName(getState()) || 'renan',
    madeAt: (new Date()).getTime(),
  })

const listenForGuesses = () => (dispatch, getState) =>
  Guesses.child(getGameName(getState())).listenFor(
    'child_added',
    guess => guess && dispatch(receiveGuess(guess))
  )

export {
  receiveGuess,
  makeGuess,
  listenForGuesses,
}
