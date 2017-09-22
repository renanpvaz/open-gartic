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
import { getGame, getPlayers } from '../../store/game'
import * as actions from '../../store/game/actions'

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
    this.gameName = this.props.match.params.name

    this.props.findGame(this.gameName)
    this.props.joinGame(this.gameName)
    this.props.listenForPlayerConnections(this.gameName)

    window.addEventListener('beforeunload', () => {
      this.props.leaveGame(this.gameName) // FIXME anon window bug
    })
  }

  componentWillUnmount() {
    this.props.leaveGame()
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
          {this.props.game.name && <DrawingBoard />}
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
    game: getGame(state),
    players: getPlayers(state),
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(Game)
