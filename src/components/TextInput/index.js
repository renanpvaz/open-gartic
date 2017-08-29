import React from 'react'
import classNames from 'classnames'

import './text-input.css'

const TextInput = ({
  name,
  value = '',
  onChange,
  preffix = '',
  placeholder,
  autoFocus,
  big
}) => (
  <input
    name={name}
    className={classNames('text-input', big && 'text-input--big')}
    type="text"
    ref={input => autoFocus && input && input.focus()}
    value={value}
    placeholder={placeholder}
    onChange={({ target }) => onChange(target.value)}
  />
)

export default TextInput
