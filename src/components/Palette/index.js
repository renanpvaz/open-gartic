import React from 'react'
import Panel from '../Panel'

import './palette.css'

const Palette = ({ colors, onSelect }) => (
  <Panel className="palette" wrap between="s" inline>
    {
      colors.map(color => (
        <button
          onClick={() => onSelect(color)}
          style={{ backgroundColor: color }}
        />
      ))
    }
  </Panel>
)

export default Palette
