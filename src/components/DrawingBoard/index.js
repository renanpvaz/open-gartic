import React from 'react'
import { connect } from 'react-redux'

import Space from '../Space'
import Sketchpad from '../Sketchpad'

import { updatePosition, updateDrawingStatus, listenForDrawingUpdates } from '../../store/game/actions'

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
      this.props.dispatch(listenForDrawingUpdates())
  }

  handleMouseDown(e) {
    this.props.dispatch(updatePosition(this.getPosition(e)))
    this.props.dispatch(updateDrawingStatus(true))

    this.setState({ lines: [] })
  }

  handleMouseMove(e) {
    const { sketching, position: lastPosition, lines } = this.state
    const { color, size } = this.props
    const currentPosition = this.getPosition(e)

    this.props.dispatch(updatePosition(currentPosition))

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
    this.props.dispatch(updateDrawingStatus(false))

    this.setState({
      strokes: [...this.state.strokes, {
        lines: this.state.lines,
        color: this.props.color,
        size: this.props.size,
      }]
    })
  }

  handleMouseLeave() {
    this.props.dispatch(updateDrawingStatus(false))
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
    isOwner: state.auth.isLogged && (state.room.owner === state.auth.loggedUser.uid),
    position: state.game.position,
    size: state.game.size,
    color: state.game.color,
    isDrawing: state.game.drawing,
  })
)(DrawingBoard)
