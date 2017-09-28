import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import omit from '../../util/omit'

import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import Tag from '../../components/Tag'
import Panel from '../../components/Panel'
import Label from '../../components/Label'
import Form from '../../components/Form'

import { createGame } from '../../store/game/actions'

class NewGame extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      words: [],
      name: '',
      newWord: '',
      timeToDraw: '',
      numberOfUsers: '',
    }

    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleWordAdition = this.handleWordAdition.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleFieldChange(target) {
    this.setState({ [target.name]: target.value })
  }

  handleWordAdition(target) {
    const { words, newWord, } = this.state

    this.setState({
      newWord: '',
      words: newWord.length ? [...words, newWord] : words
    })
  }

  handleSubmit() {
    this.props.createGame(omit(['newWord'], this.state)).then(
      () => this.props.goToGame(this.state.name)
    )
  }

  render() {
    const {
      words,
      timeToDraw,
      numberOfUsers,
      newWord,
      name,
    } = this.state

    return (
      <Panel column>
        <Form
          primaryAction={<Button onClick={this.handleSubmit} primary>create room</Button>}
          secondaryAction={<Button>cancel</Button>}
        >
          <Label>
            Game name
            <TextInput
              name="name"
              onChange={this.handleFieldChange}
              autoFocus
              value={name}
            />
          </Label>
          <Label>
            Time to draw
            <TextInput
              name="timeToDraw"
              onChange={this.handleFieldChange}
              autoFocus
              value={timeToDraw}
            />
          </Label>
          <Label>
            Number of users
            <TextInput
              name="numberOfUsers"
              onChange={this.handleFieldChange}
              value={numberOfUsers}
            />
          </Label>
          <Label info="press enter to add">
            Word list
            <TextInput
              name="newWord"
              onChange={this.handleFieldChange}
              onPressEnter={this.handleWordAdition}
              value={newWord}
            />
          </Label>
          <Panel wrap>{words.map(word => <Tag key={word}>{word}</Tag>)}</Panel>
        </Form>
      </Panel>
    )
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({
    createGame,
    goToGame: name => push(`/game/${name}`)
  }, dispatch)
)(NewGame)
