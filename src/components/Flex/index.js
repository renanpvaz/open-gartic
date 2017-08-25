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

const FlexColumn = props => <Flex {...props} flexDirection="column" />
const FlexRow = props => <Flex {...props} flexDirection="row" />
const FlexWrap = props => <Flex {...props} flexDirection="row" flexWrap="wrap" />
const FlexCenter = props => <Flex {...props} justifyContent="center" alignItems="center" />

export {
  Flex,
  FlexColumn,
  FlexRow,
  FlexCenter,
  FlexWrap,
}

export default Flex
