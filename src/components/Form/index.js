import React from 'react'

import Space from '../Space'
import Flex from '../Flex'

const Form = ({ children, primaryAction, secondaryAction }) => (
  <Flex.Column tag="form">
    <Space mB={2}>
      {children.map(child => <Space fit mY={2}>{child}</Space>)}
    </Space>
    <Flex.Row tag="footer" justifyContent="flex-end">
      <Space mX={2}>
        {secondaryAction}
      </Space>
      {primaryAction}
    </Flex.Row>
  </Flex.Column>
)

export default Form
