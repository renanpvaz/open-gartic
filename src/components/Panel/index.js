import React from 'react'
import classNames from 'classnames'

import './panel.css'

const Panel = ({
  tag: Tag = 'div',
  className,
  children,
  inset,
  below,
  between,
  inline,
  row,
  column,
  flex,
  align,
  justify,
  wrap,
}) => (
  <Tag
    style={{
      flex,
      alignItems: align,
      justifyContent: justify,
      flexWrap: wrap && 'wrap',
      flexDirection: column ? 'column' : row ? 'row' : '',
    }}
    className={
      classNames(
        className,
        inset && 'panel-inset',
        inset && `panel-inset-${inset}`,
        below && `panel-below-${below}`,
        between && `panel-between-${between}`,
        between && inline && `panel-between-inline-${between}`,
        (row || column) && 'panel-flex',
      )
    }
  >
    {children}
  </Tag>
)

export default Panel
