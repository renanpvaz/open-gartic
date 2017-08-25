import React from 'react'

import { FlexWrap } from '../Flex'
import Space from '../Space'

import './palette.css'

const Palette = ({ colors, onSelect }) => (
  <FlexWrap className="palette">
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
  </FlexWrap>
)

export default Palette
