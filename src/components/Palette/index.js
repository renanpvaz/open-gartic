import React from 'react'

import Flex from '../Flex'
import Space from '../Space'

import './palette.css'

const Palette = ({ colors, onSelect }) => (
  <Flex.Wrap className="palette">
    {
      colors.map(color => (
        <Space key={color} padding={2}>
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
