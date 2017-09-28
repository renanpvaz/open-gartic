import React from 'react'

import Panel from '../Panel'

const Form = ({ children, primaryAction, secondaryAction }) => (
  <Panel tag="form" column>
    <Panel below="s" between="s">
      {children}
    </Panel>
    <Panel tag="footer" between="s" inline row justify="flex-end">
      {secondaryAction}
      {primaryAction}
    </Panel>
  </Panel>
)

export default Form
