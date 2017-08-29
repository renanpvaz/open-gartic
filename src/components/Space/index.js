import React from 'react'

const points = {
  'undefined': '',
  ...['4px', '8px', '16px', '24px', '32px', '40px']
}

const Space = ({
  Tag = 'div',
  children,
  innerRef,
  padding = 'initial',
  margin = 'initial',
  p,
  pX,
  pY,
  pB,
  m,
  mX,
  mY,
  mB,
  width = 'auto',
  height = 'auto',
  size,
  fit,
}) => (
  <Tag
    ref={innerRef}
    style={{
      padding: `${points[pY] || 0} ${points[pX] || 0} ${points[pB]}`,
      margin: `${points[mY] || 0} ${points[mX] || 0} ${points[mB]}`,
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
