import React from 'react'

const points = {
  'undefined': '',
  ...Array(12).fill(0).map((_, i) => `${.25 * (i + 1)}rem`)
}

const Space = ({
  Tag = 'div',
  children,
  innerRef,
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
