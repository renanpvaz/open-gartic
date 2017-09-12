import React from 'react'
import ReactDOM from 'react-dom'

import './sketchpad.css'

class Sketchpad extends React.Component {
  constructor(props) {
    super(props)

    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)

    this.state = {
      strokes: [],
      lastPosition: { x: 0, y: 0 },
      currentStroke: {
        lines: []
      }
    }
  }

  getPosition(e) {
    return {
      x: e.pageX - this.canvas.offsetLeft,
      y: e.pageY - this.canvas.offsetTop
    }
  }

  makeLine({ start, end }, { color, size }, compositeOperation) {
    this.context.save()
    this.context.lineJoin = 'round'
    this.context.lineCap = 'round'
    this.context.strokeStyle = color
    this.context.lineWidth = size
    this.context.globalCompositeOperation = compositeOperation
    this.context.beginPath()
    this.context.moveTo(start.x, start.y)
    this.context.lineTo(end.x, end.y)
    this.context.closePath()
    this.context.stroke()
    this.context.restore()
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  makeStroke(stroke) {
    stroke.type === 'clear'
      ? this.clear()
      : stroke.lines.forEach(line => this.makeLine(line, stroke))
  }

  draw(line, stroke) {
    this.makeLine(line, stroke, 'source-over')
  }

  redraw() {
    this.props.strokes.forEach(this.makeStroke)
  }

  handleMouseDown(e) {
    this.setState({
      sketching: true,
      lastPosition: this.getPosition(e),
      currentStroke: {
        color: this.props.color,
        size: this.props.size,
        lines: [],
      }
    })
  }

  handleMouseMove(e) {
    const { sketching, lastPosition, currentStroke } = this.state
    const { color, size } = this.props

    if (sketching) {
      const currentPosition = this.getPosition(e)

      this.draw(
        { start: lastPosition, end: currentPosition },
        { color, size }
      )

      this.setState({
        lastPosition: currentPosition,
        currentStroke: {
          ...currentStroke,
          lines: [...currentStroke.lines, {
            start: lastPosition,
            end: currentPosition,
          }]
        }
      })
    }
  }

  handleMouseUp() {
    this.setState({
      sketching: false,
      strokes: [...this.state.strokes, this.state.currentStroke]
    })
  }

  render() {
    return this.props.height ? (
      <canvas
        ref={canvas => (
          (this.canvas = canvas) && (this.context = canvas.getContext('2d'))
        )}
        className="sketchpad"
        height={this.props.height}
        width={this.props.width}
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUp}
      />
    ) : null
  }
}

export default Sketchpad
