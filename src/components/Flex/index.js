import React from 'react'

const Flex = ({
  tag: Tag = 'div',
  className,
  children,
  flexDirection = 'initial',
  alignItems = 'initial',
  justifyContent = 'initial',
  flexWrap = 'initial',
  width,
  height,
}) => (
  <Tag
    className={className}
    style={{
      display: 'flex',
      flexDirection,
      alignItems,
      justifyContent,
      flexWrap,
      width,
      height,
    }}
  >
    {children}
  </Tag>
)

Object.assign(Flex, {
  Column: props => <Flex {...props} flexDirection="column" />,
  Row: props => <Flex {...props} flexDirection="row" />,
  Wrap: props => <Flex {...props} flexDirection="row" flexWrap="wrap" />,
  Center: props => <Flex {...props} justifyContent="center" alignItems="center" />,
  SpaceBetween: props => <Flex {...props} flexDirection="row" justifyContent="space-between" />,
})

export default Flex
