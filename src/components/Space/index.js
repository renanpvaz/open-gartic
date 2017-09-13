import React from 'react'

const points = {
  'false': '',
  'null': '',
  'undefined': '',
  ...Array(12).fill(0).map((_, i) => `${.25 * (i + 1)}rem`)
}

const Space = ({
  tag: Tag = 'div',
  onClick,
  children,
  innerRef,
  pX,
  pY,
  pB,
  mX,
  mY,
  mB,
  width = 'auto',
  height = 'auto',
  size,
  fit,
}) => (
  <Tag
    onClick={onClick}
    ref={innerRef}
    style={{
      padding: `${points[pY] || 0} ${points[pX] || 0} ${points[pB]}`,
      margin: `${points[mY] || 0} ${points[mX] || 0} ${points[mB]}`,
      width: fit ? '100%' : width,
      height: height || size,
      minWidth: size,
      minHeight: size,
      maxWidth: size,
      maxHeight: size,
    }}
  >
    {children}
  </Tag>
)

export default Space
