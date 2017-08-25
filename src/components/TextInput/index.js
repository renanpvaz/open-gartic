import React from 'react'
import classNames from 'classnames'

import './text-input.css'

const TextInput = ({
  value = '',
  onChange,
  preffix = '',
  placeholder,
  big
}) => (
  <input
    className={classNames('text-input', big && 'text-input--big')}
    type="text"
    value={value}
    placeholder={placeholder}
    onChange={({ target }) => onChange(target.value)}
  />
)

export default TextInput
