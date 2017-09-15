import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Sidebar from '../../components/Sidebar'
import ChatBox from '../../components/ChatBox'
import Ranking from '../../components/Ranking'
import Space from '../../components/Space'
import Flex from '../../components/Flex'

import ToolsSidebar from '../../containers/ToolsSidebar'
import DrawingBoard from '../../containers/DrawingBoard'

import { getLoggedUser } from '../../store/auth'
import { getRoom, getPlayers } from '../../store/room'
import * as actions from '../../store/room/actions'

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.el = {}
    this.state = {
      users: [],
      color: 'black',
      size: '32'
    }
  }

  componentDidMount() {
    const roomName = this.props.match.params.name

    this.props.findRoom(roomName)
    this.props.joinRoom(roomName)
    this.props.listenForPlayerConnections(roomName)

    window.addEventListener('beforeunload', () => {
      this.props.leaveRoom() // FIXME anon window bug
    })
  }

  componentWillUnmount() {
    this.props.leaveRoom()
  }

  render() {
    return (
      <main className="game">
        <Flex.Row width="100vw">
          <Space height="60vh">
            <Sidebar>
              <Ranking players={this.props.players} />
              <ToolsSidebar />
            </Sidebar>
          </Space>
          {this.props.room.key && <DrawingBoard />}
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
