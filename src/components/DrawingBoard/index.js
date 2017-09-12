// import React from 'react'
// import ReactDOM from 'react-dom'
//
// import './sketchpad.css'
//
// class DrawingBoard extends React.Component {
//   constructor(props) {
//     super(props)
//
//     this.handleMouseDown = this.handleMouseDown.bind(this)
//     this.handleMouseUp = this.handleMouseUp.bind(this)
//     this.handleMouseMove = this.handleMouseMove.bind(this)
//
//     this.state = {
//       lines: [],
//       strokes: [],
//       sketching: false,
//       lastPosition: { x: 0, y: 0 },
//     }
//   }
//
//   getPosition(e) {
//     return {
//       x: e.pageX - this.canvas.offsetLeft,
//       y: e.pageY - this.canvas.offsetTop
//     }
//   }
//
//   handleMouseDown(e) {
//     this.setState({
//       sketching: true,
//       lastPosition: this.getPosition(e),
//       lines: [],
//     })
//   }
//
//   handleMouseMove(e) {
//     const { sketching, lastPosition, lines } = this.state
//     const { color, size } = this.props
//
//     if (sketching) {
//       const currentPosition = this.getPosition(e)
//
//       this.setState({
//         lastPosition: currentPosition,
//         lines: [...lines, {
//           start: lastPosition,
//           end: currentPosition,
//         }]
//       })
//     }
//   }
//
//   handleMouseUp() {
//     this.setState({
//       sketching: false,
//       strokes: [...this.state.strokes, {
//         lines: this.state.lines,
//         color: this.props.color,
//         size: this.props.size,
//       }]
//     })
//   }
//
//   render() {
//     return (
//       <Sketchpad
//         size={this.props.size}
//         color={this.props.color}
//         onMouseDown={this.handleMouseDown}
//         onMouseMove={this.handleMouseMove}
//         onMouseUp={this.handleMouseUp}
//         lines={this.state.lines}
//       />
//     )
//   }
// }
//
// export default DrawingBoard
