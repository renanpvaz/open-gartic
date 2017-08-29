import React from 'react'
import classNames from 'classnames'

import './label.css'

const Label = ({ required, info, children }) => {
  const [label, ...rest] = children

  return (
    <label className={classNames('label', required && 'label--required')}>
      <span className="label__title">
        {label}
        {info && <small className="label__info"> &nbsp;({info})</small>}
      </span>
      {rest}
    </label>
  )
}

export default Label
