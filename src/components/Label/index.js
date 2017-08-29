import React from 'react'
import classNames from 'classnames'

import './label.css'

const Label = ({ required, children }) => {
  const [label, ...rest] = children

  return (
    <label className={classNames('label', required && 'label--required')}>
      <span>{label}</span>
      {rest}
    </label>
  )
}

export default Label
