import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Space from '../../components/Space'
import Sketchpad from '../../components/Sketchpad'

import {
  updatePosition,
  startDrawing,
  stopDrawing,
  listenForDrawingUpdates
} from '../../store/sketch/actions'

import {
  isDrawing,
  getColor,
  getSize,
  getPosition,
} from '../../store/sketch'

import { isOwner } from '../../store/game'

class DrawingBoard extends React.Component {
  constructor(props) {
    super(props)

    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.getContainerRef = this.getContainerRef.bind(this)

    this.state = {
      hasContainerRef: false,
      lines: [],
      strokes: [],
      sketching: false,
      position: { x: 0, y: 0 },
    }
  }

  getPosition(e) {
    return {
      x: e.pageX - this.container.offsetLeft,
      y: e.pageY - this.container.offsetTop
    }
  }

  componentDidMount() {
    if (!this.props.isOwner)
      this.props.listenForDrawingUpdates()
  }

  handleMouseDown(e) {
    this.props.updatePosition(this.getPosition(e))
    this.props.startDrawing()

    this.setState({ lines: [] })
  }

  handleMouseMove(e) {
    const { sketching, position: lastPosition, lines } = this.state
    const currentPosition = this.getPosition(e)

    this.props.updatePosition(currentPosition)

    if (sketching) {
      this.setState({
        lines: [...lines, {
          start: lastPosition,
          end: currentPosition,
        }]
      })
    }
  }

  handleMouseUp() {
    this.props.stopDrawing()

    this.setState({
      strokes: [...this.state.strokes, {
        lines: this.state.lines,
        color: this.props.color,
        size: this.props.size,
      }]
    })
  }

  handleMouseLeave() {
    this.props.stopDrawing()
  }

  getContainerRef(container) {
    if (container) {
      this.container = container
      this.setState({ hasContainerRef: true })
    }
  }

  render() {
    return (
      <Space innerRef={this.getContainerRef} width="80%" height="60vh">
        {this.state.hasContainerRef && (
          <Sketchpad
            sketching={this.props.isDrawing}
            height={this.container.offsetHeight}
            width={this.container.offsetWidth}
            size={this.props.size}
            color={this.props.color}
            position={this.props.position}
            onMouseDown={this.handleMouseDown}
            onMouseMove={this.handleMouseMove}
            onMouseUp={this.handleMouseUp}
            onMouseLeave={this.handleMouseLeave}
          />
        )}
      </Space>
    )
  }
}

export default connect(
  state => ({
    isOwner: isOwner(state),
    position: getPosition(state),
    size: getSize(state),
    color: getColor(state),
    isDrawing: isDrawing(state),
  }),
  dispatch => bindActionCreators({
    startDrawing,
    stopDrawing,
    updatePosition,
    listenForDrawingUpdates,
  }, dispatch)
)(DrawingBoard)
