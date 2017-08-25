import React from 'react'

const Space = ({
  Tag = 'div',
  children,
  innerRef,
  padding = 'initial',
  margin = 'initial',
  width = 'auto',
  height = 'auto',
  size
}) => (
  <Tag
    ref={innerRef}
    style={{
      padding,
      margin,
      width,
      height,
      maxWidth: size,
      maxHeight: size,
    }}
  >
    {children}
  </Tag>
)

export default Space
