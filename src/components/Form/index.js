import React from 'react'

import Space from '../Space'
import TextInput from '../TextInput'
import Button from '../Button'
import Flex from '../Flex'

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
