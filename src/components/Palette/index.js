import React from 'react'

import Flex from '../Flex'
import Space from '../Space'

import './palette.css'

const Palette = ({ colors, onSelect }) => (
  <Flex.Wrap className="palette">
    {
      colors.map(color => (
        <Space padding={8} size={32}>
          <button
            onClick={() => onSelect(color)}
            style={{ backgroundColor: color }}
          />
        </Space>
      ))
    }
  </Flex.Wrap>
)

export default Palette
