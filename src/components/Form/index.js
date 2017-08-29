import React from 'react'

import Space from '../components/Space'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import Flex from '../components/Flex'

const Form = ({ children, actions }) => (
  <Flex.Column tag="form">
    <Space mB={2}>
      {children.map(child => <Space fit mY={0}>{child}</Space>)}
    </Space>
    <Flex.Row justifyContent="flex-end">
      {actions}
    </Flex.Row>
  </Flex.Column>
)

export default Form
