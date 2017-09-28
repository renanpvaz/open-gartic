import React from 'react'
import classNames from 'classnames'

import './panel.css'

const Panel = ({
  tag: Tag = 'div',
  className,
  children,
  fit,
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
  innerRef
}) => (
  <Tag
    ref={innerRef}
    style={{
      flex,
      alignItems: align,
      justifyContent: justify,
      flexWrap: wrap && 'wrap',
      flexDirection: column ? 'column' : (row || wrap) ? 'row' : '',
    }}
    className={
      classNames(
        className,
        inset && 'panel-inset',
        fit && 'panel-fit',
        inset && `panel-inset-${inset}`,
        below && `panel-below-${below}`,
        between && `panel-between-${between}`,
        between && inline && `panel-between-inline-${between}`,
        (row || column || wrap) && 'panel-flex',
      )
    }
  >
    {children}
  </Tag>
)

export default Panel
