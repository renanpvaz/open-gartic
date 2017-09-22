import React from 'react'

import './sketchpad.css'

class Sketchpad extends React.Component {
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

  componentWillReceiveProps({ position, sketching }) {
    const { color, size, position: lastPosition } = this.props
    const positionHasChanged =
      position.x !== lastPosition.x || position.y !== lastPosition.y

    if (sketching && positionHasChanged) {
      this.draw(
        { start: lastPosition, end: position },
        { color, size }
      )
    }
  }

  render() {
    return (
      <canvas
        className="sketchpad"
        ref={canvas => (
          (this.canvas = canvas) && (this.context = canvas.getContext('2d'))
        )}
        height={this.props.height}
        width={this.props.width}
        onMouseDown={this.props.onMouseDown}
        onMouseMove={this.props.onMouseMove}
        onMouseUp={this.props.onMouseUp}
        onMouseLeave={this.props.onMouseLeave}
      />
    )
  }
}

export default Sketchpad
