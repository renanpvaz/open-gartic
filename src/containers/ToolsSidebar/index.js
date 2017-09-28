import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Palette from '../../components/Palette'
import Panel from '../../components/Panel'
import RangeSlider from '../../components/RangeSlider'

import { getSize } from '../../store/sketch'
import { updateSize, updateColor } from '../../store/sketch/actions'

import './tools-sidebar.css'

// FIXME move to /containers folder
const ToolsSidebar = props => (
  <Panel tag="aside" className="tools-sidebar" column>
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
    <Panel row align="center" justify="space-around">
      <RangeSlider
        value={props.size}
        onChange={({ value }) => props.updateSize(value)}
        min="1"
        max="32"
      />
      {/* {`${this.state.size || 1}px`} */}
    </Panel>
  </Panel>
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
