import React from 'react'
import classNames from 'classnames'

import './divider.css'

const Divider = ({ horizontal, vertical }) => (
  <div className={
    classNames(
      'divider',
      horizontal && 'divider--horizontal', 
      vertical && 'divider--vertical'
    )}
  />
)

export default Divider
