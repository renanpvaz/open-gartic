import React from 'react'

const Flex = ({
  Tag = 'div',
  children,
  flexDirection = 'initial',
  alignItems = 'initial',
  justifyContent = 'initial',
}) => (
  <Tag
    style={{
      display: 'flex',
      flexDirection,
      alignItems,
      justifyContent,
    }}
  >
    {children}
  </Tag>
)

const FlexColumn = props => <Flex {...props} flexDirection="column" />
const FlexRow = props => <Flex {...props} flexDirection="row" />
const FlexCenter = props => <Flex {...props} justifyContent="center" alignItems="center" />

export {
  Flex,
  FlexColumn,
  FlexRow,
  FlexCenter,
}

export default Flex
