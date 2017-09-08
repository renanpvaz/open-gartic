import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Sidebar from '../../components/Sidebar'
import ChatBox from '../../components/ChatBox'
import Palette from '../../components/Palette'
import Ranking from '../../components/Ranking'
import Space from '../../components/Space'
import SketchPad from '../../components/SketchPad'
import Flex from '../../components/Flex'

import { getLoggedUser } from '../../store/auth'
import { getRoom, getPlayers } from '../../store/room'
import * as actions from '../../store/room/actions'

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.el = {}
    this.state = {
      users: [],
      brushColor: 'black'
    }
  }

  componentDidMount() {
    const roomName = this.props.match.params.name

    this.props.findRoom(roomName)
    this.props.joinRoom(roomName, this.props.loggedUser)
    this.props.listenForNewPlayers()
  }

  render() {
    console.log(this.props)
    return (
      <main className="game">
        <Flex.Row>
          <Space height="60vh" width="10vw">
            <Sidebar>
              <Flex.Row alignItems="start">
                <Ranking users={this.props.players} />
                <Palette
                  onSelect={color => this.setState({ brushColor: color })}
                  colors={[
                    'black',
                    'white',
                    '#DC5960',
                    '#08c',
                    '#ffd248',
                    '#26968c',
                  ]}
                />
              </Flex.Row>
            </Sidebar>
          </Space>
          <Space innerRef={ref => (this.el = ref)} width="100%" height="60vh">
            <SketchPad brushColor={this.state.brushColor} height={this.el.height} />
          </Space>
        </Flex.Row>
        <Space height="40vh" width="100vw">
          <ChatBox />
        </Space>
      </main>
    )
  }
}

export default connect(
  state => ({
    loggedUser: getLoggedUser(state),
    room: getRoom(state),
    players: getPlayers(state),
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(Game)
