import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Sidebar from '../../components/Sidebar'
import GuessBox from '../../components/GuessBox'
import Ranking from '../../components/Ranking'
import Panel from '../../components/Panel'

import ToolsSidebar from '../../containers/ToolsSidebar'
import DrawingBoard from '../../containers/DrawingBoard'

import { getUser } from '../../store/auth'
import { getGame, getPlayers } from '../../store/game'
import * as actions from '../../store/game/actions'

import './game.css'

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
    const loaded = !!this.props.game.name

    return (
      <main className="game">
        <Sidebar>
          <Ranking players={this.props.players} />
          <ToolsSidebar />
        </Sidebar>
        <Panel flex={1} column>
           <Panel flex={2}>
             {loaded && <DrawingBoard />}
           </Panel>
           <Panel flex={1}>
             {loaded && <GuessBox />}
           </Panel>
        </Panel>
      </main>
    )
    // return (
    //   <main className="game">
    //     <Flex.Row width="100vw" height="100vh">
    //       <Space height="100%">
    //         <Sidebar>
    // <Ranking players={this.props.players} />
    //           <ToolsSidebar />
    //         </Sidebar>
    //       </Space>
    //       <Flex.Column height="100%" width="100%">
    //         {loaded && <DrawingBoard />}
    //         <Space height="40vh" fit>
    //           {loaded && <GuessBox />}
    //         </Space>
    //       </Flex.Column>
    //     </Flex.Row>
    //   </main>
    // )
  }
}

export default connect(
  state => ({
    loggedUser: getUser(state),
    game: getGame(state),
    players: getPlayers(state),
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(Game)
