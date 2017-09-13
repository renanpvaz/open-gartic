import React from 'react'

import './range-slider.css'

const RangeSlider = ({ value, onChange, min, max }) => (
  <input
    className="range-slider"
    type="range"
    onChange={({ target }) => onChange(target)}
    min={min}
    max={max}
  />
)

export default RangeSlider
