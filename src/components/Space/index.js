import React from 'react'

const Space = ({
  Tag = 'div',
  children,
  padding = 'initial',
  margin = 'initial',
  width = 'initial',
  height = 'initial',
}) => (
  <Tag
    style={{
      padding,
      margin,
      width,
      height,
    }}
  >
    {children}
  </Tag>
)

export default Space
