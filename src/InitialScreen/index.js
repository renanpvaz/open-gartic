import React from 'react'

import Space from '../components/Space'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import Flex from '../components/Flex'

const InitialScreen = () => (
  <Flex.Column>
    <Space fit pY={0}>
      <TextInput autoFocus big placeholder="room name" value="" />
    </Space>
    <Space fit pY={0} mB="2">
      <TextInput big placeholder="username" value="" />
    </Space>
    <Space pY="1">
      <Button primary fit size="xl">join room</Button>
    </Space>
    <Space pY="1">
      <Button fit size="xl">create room</Button>
    </Space>
  </Flex.Column>
)

export default InitialScreen
