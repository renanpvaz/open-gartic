import React from 'react'

import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import Palette from '../components/Palette'
import Ranking from '../components/Ranking'
import Space from '../components/Space'
import SketchPad from '../components/SketchPad'
import { FlexRow } from '../components/Flex'

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.el = {}
    this.state = {
      brushColor: 'black'
    }
  }

  render() {
    return (
      <main className="game">
        <FlexRow>
          <Space height="60vh" width="10vw">
            <Sidebar>
              <FlexRow alignItems="start">
                <Ranking />
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
              </FlexRow>
            </Sidebar>
          </Space>
          <Space innerRef={ref => (this.el = ref)} width="100%" height="60vh">
            <SketchPad brushColor={this.state.brushColor} height={this.el.height} />
          </Space>
        </FlexRow>
        <Space height="40vh" width="100vw">
          <ChatContainer />
        </Space>
      </main>
    )
  }
}

export default Game
