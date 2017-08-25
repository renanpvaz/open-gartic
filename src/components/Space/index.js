import React from 'react'

const points = [
  8,
  16,
  24,
  32,
  40
]

const Space = ({
  Tag = 'div',
  children,
  innerRef,
  padding = 'initial',
  margin = 'initial',
  mb = 0,
  width = 'auto',
  height = 'auto',
  size,
  fit,
}) => (
  <Tag
    ref={innerRef}
    style={{
      padding,
      margin,
      marginBottom: points[mb],
      width: fit ? '100%' : width,
      height,
      maxWidth: size,
      maxHeight: size,
    }}
  >
    {children}
  </Tag>
)

export default Space
