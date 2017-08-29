import React from 'react'

const Flex = ({
  Tag = 'div',
  className,
  children,
  flexDirection = 'initial',
  alignItems = 'initial',
  justifyContent = 'initial',
  flexWrap = 'initial',
}) => (
  <Tag
    className={className}
    style={{
      display: 'flex',
      flexDirection,
      alignItems,
      justifyContent,
      flexWrap,
    }}
  >
    {children}
  </Tag>
)

const Column = props => <Flex {...props} flexDirection="column" />
const Row = props => <Flex {...props} flexDirection="row" />
const Wrap = props => <Flex {...props} flexDirection="row" flexWrap="wrap" />
const Center = props => <Flex {...props} justifyContent="center" alignItems="center" />
const SpaceBetween = props => <Flex {...props} flexDirection="row" justifyContent="space-between" />

export default {
  Column,
  Row,
  Center,
  Wrap,
  SpaceBetween,
}
