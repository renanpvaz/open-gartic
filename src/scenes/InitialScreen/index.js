import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import Panel from '../../components/Panel'

class InitialScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      room: ''
    }
  }

  render() {
    return (
      <Panel column between="l">
        <Panel column between="s">
          <TextInput
            onChange={target => this.setState({ room: target.value })}
            autoFocus
            big
            placeholder="room name"
            value={this.state.room}
          />
          <TextInput big placeholder="username" value="" />
        </Panel>
        <Panel column between="m">
          <Button onClick={() => this.props.dispatch(push(`room/${this.state.room}`))} primary fit size="xl">
            join room
          </Button>
          <Button fit size="xl">create room</Button>
        </Panel>
      </Panel>
    )
  }
}

export default connect()(InitialScreen)
