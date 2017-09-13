import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Palette from '../Palette'
import Space from '../Space'
import Flex from '../Flex'
import RangeSlider from '../RangeSlider'

import { updateSize, updateColor } from '../../store/game/actions'

import './tools-sidebar.css'

// FIXME move to /containers folder
const ToolsSidebar = ({ children, game,dispatch }) => (
  <Flex.Column tag="aside" className="tools-sidebar">
    <Palette
      onSelect={color => dispatch(updateColor(color))} // FIXME bindActionCreators(...)
      colors={[ // FIXME move to constant module
        'black',
        '#DC5960',
        '#08c',
        '#ffd248',
        '#26968c',
      ]}
    />
    <Flex.Row alignItems="center" justifyContent="space-around">
      <RangeSlider
        value={game.size}
        onChange={({ value }) => dispatch(updateSize(value))}
        min="1"
        max="32"
      />
      {/* {`${this.state.size || 1}px`} */}
    </Flex.Row>
  </Flex.Column>
)

export default connect(
  state => ({
    game: state.game // FIXME use selector
  })
)(ToolsSidebar)
