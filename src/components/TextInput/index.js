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
  onPressEnter,
  big
}) => (
  <input
    name={name}
    className={classNames('text-input', big && 'text-input--big')}
    type="text"
    value={value}
    placeholder={placeholder}
    onKeyPress={e => e.key === 'Enter' && onPressEnter(e)}
    onChange={({ target }) => onChange(target)}
  />
)

export default TextInput
