import React from 'react'
import ReactDOM from 'react-dom'

class Sketchpad extends React.Component {
  constructor(props) {
    super(props)

    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
  }

  componentDidMount(){
    const canvas = ReactDOM.findDOMNode(this)

    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const context = canvas.getContext('2d')

    this.setState({
      canvas,
      context
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.clear) {
      this.resetCanvas()
    }
  }
  handleMouseDown(e) {
    const rect = this.state.canvas.getBoundingClientRect()

    this.state.context.beginPath()

    this.setState({
      lastX: e.clientX - rect.left,
      lastY: e.clientY - rect.top,
      drawing: true
    })
  }

  handleMouseMove(e) {
    if (this.state.drawing) {
      const rect = this.state.canvas.getBoundingClientRect()
      const lastX = this.state.lastX
      const lastY = this.state.lastY
      let currentX
      let currentY

      currentX = e.clientX - rect.left
      currentY = e.clientY - rect.top


      this.draw(lastX, lastY, currentX, currentY)
      this.setState({
        lastX: currentX,
        lastY: currentY
      })
    }
  }

  handleMouseUp() {
    this.setState({ drawing: false })
  }

  draw(lX, lY, cX, cY) {
    const newContext = this.state.context

    newContext.strokeStyle = this.props.brushColor
    newContext.lineWidth = this.props.lineWidth

    this.setState({ context: newContext })
    this.state.context.moveTo(lX, lY)
    this.state.context.lineTo(cX, cY)
    this.state.context.stroke()
  }

  resetCanvas() {
    const width = this.state.context.canvas.width
    const height = this.state.context.canvas.height

    this.state.context.clearRect(0, 0, width, height)
  }

  render() {
    return (
      <canvas
        width="100%"
        height={this.props.height}
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUp}
      />
    )
  }
}

export default Sketchpad
