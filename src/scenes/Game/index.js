import React from 'react'
import firebase from 'firebase'
import { compose, lifecycle } from 'recompose'

import withCollection from '../../HOCs/with-collection'
import withCurrentUser from '../../HOCs/with-current-user'

import Sidebar from '../../components/Sidebar'
import ChatBox from '../../components/ChatBox'
import Palette from '../../components/Palette'
import Ranking from '../../components/Ranking'
import Space from '../../components/Space'
import SketchPad from '../../components/SketchPad'
import Flex from '../../components/Flex'

const enhance = compose(
  withCurrentUser(firebase),
  withCollection(firebase, 'rooms'),
  lifecycle({
    componentDidMount() {
      const { rooms, match, currentUser } = this.props

      rooms.findOne(match.params.name).then(config => {
        const isOwner = config.owner === currentUser().id

        this.setState({
          ...config,
          isOwner,
          users: isOwner ? config.users : [...config.users, currentUser()]
        }, () => console.log(this.state))
      })
    }
  })
)

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.el = {}
    this.state = {
      users: [],
      brushColor: 'black'
    }
  }

  render() {
    return (
      <main className="game">
        <Flex.Row>
          <Space height="60vh" width="10vw">
            <Sidebar>
              <Flex.Row alignItems="start">
                <Ranking users={this.props.users} />
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

export default enhance(Game)
