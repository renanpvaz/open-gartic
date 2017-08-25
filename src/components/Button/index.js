import React from 'react'
import classNames from 'classnames'

import './button.css'

const Button = ({
  children,
  primary,
  ghost,
  disabled,
  size = 'm',
}) => (
  <button
    disabled={disabled}
    className={
      classNames(
        'button',
        `button--${size}`,
        primary && 'button--primary',
        ghost && 'button--ghost',
      )
    }
  >
    {children}
  </button>
)

export default Button
