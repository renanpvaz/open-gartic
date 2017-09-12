import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Space from '../../components/Space'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import Flex from '../../components/Flex'

class InitialScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      room: ''
    }
  }

  render() {
    return (
      <Flex.Column>
        <Space fit pY={0}>
          <TextInput
            onChange={target => this.setState({ room: target.value })}
            autoFocus
            big
            placeholder="room name"
            value={this.state.room}
          />
        </Space>
        <Space fit pY={0} mB="2">
          <TextInput big placeholder="username" value="" />
        </Space>
        <Space pY="1">
          <Button onClick={() => this.props.dispatch(push(`room/${this.state.room}`))} primary fit size="xl">
            join room
          </Button>
        </Space>
        <Space pY="1">
          <Button fit size="xl">create room</Button>
        </Space>
      </Flex.Column>
    )
  }
}

export default connect()(InitialScreen)
