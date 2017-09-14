import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Palette from '../Palette'
import Flex from '../Flex'
import RangeSlider from '../RangeSlider'

import { getSize } from '../../store/sketch'
import { updateSize, updateColor } from '../../store/sketch/actions'

import './tools-sidebar.css'

// FIXME move to /containers folder
const ToolsSidebar = props => (
  <Flex.Column tag="aside" className="tools-sidebar">
    <Palette
      onSelect={color => props.updateColor(color)}
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
        value={props.size}
        onChange={({ value }) => props.updateSize(value)}
        min="1"
        max="32"
      />
      {/* {`${this.state.size || 1}px`} */}
    </Flex.Row>
  </Flex.Column>
)

export default connect(
  state => ({
    game: getSize(state)
  }),
  dispatch => bindActionCreators({
    updateSize,
    updateColor
  }, dispatch)
)(ToolsSidebar)
