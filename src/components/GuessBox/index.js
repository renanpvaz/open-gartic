import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getGuesses } from '../../store/guess'
import * as actions from '../../store/guess/actions'

import TextInput from '../TextInput'

import './guess-box.css'

class GuessBox extends React.Component {
  constructor(state) {
    super(state)

    this.state = {
      newGuess: ''
    }
  }

  componentDidMount() {
    this.props.listenForGuesses()
  }

  render() {
    return (
      <section className="guess-box">
        <ul className="guess-box__guesses">
          {
            this.props.guesses.map(guess =>
              <li className="guess-box__guess">
                <strong>{(guess.user || 'renan') + ':'}&nbsp;&nbsp;</strong>
                {guess.text}
              </li>
            )
          }
        </ul>
        <TextInput
          className="guess-box__input"
          placeholder="Guess here"
          value={this.state.newGuess}
          onChange={target => this.setState({ newGuess: target.value })}
          onPressEnter={() => {
            this.props.makeGuess(this.state.newGuess)
            this.setState({ newGuess: '' })
          }}
        />
      </section>
    )
  }
}

export default connect(
  state => ({
    guesses: getGuesses(state)
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(GuessBox)
