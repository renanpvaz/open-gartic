import React from 'react'
import classNames from 'classnames'

import './button.css'

const Button = ({
  children,
  primary,
  ghost,
  disabled,
  fit,
  size = 'm',
  onClick
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={
      classNames(
        'button',
        `button--${size}`,
        fit && 'button--fit',
        primary && 'button--primary',
        ghost && 'button--ghost',
      )
    }
  >
    {children}
  </button>
)

export default Button
