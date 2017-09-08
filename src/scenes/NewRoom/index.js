import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import Tag from '../../components/Tag'
import Flex from '../../components/Flex'
import Label from '../../components/Label'
import Form from '../../components/Form'

import { createRoom } from '../../store/room/actions'

class NewRoom extends React.Component {
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
    this.props.createRoom({
      words: this.state.words,
      name: this.state.name,
      timeToDraw: this.state.timeToDraw,
      numberOfUsers: this.state.numberOfUsers,
    }).then(
      () => this.props.goToRoom(this.state.name)
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
      <Flex.Column>
        <Form
          primaryAction={<Button onClick={this.handleSubmit} primary>create room</Button>}
          secondaryAction={<Button>cancel</Button>}
        >
          <Label>
            Room name
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
          <Flex.Wrap>{words.map(word => <Tag key={word}>{word}</Tag>)}</Flex.Wrap>
        </Form>
      </Flex.Column>
    )
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({
    createRoom,
    goToRoom: name => push(`/room/${name}`)
  }, dispatch)
)(NewRoom)
