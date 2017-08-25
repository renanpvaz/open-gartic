import React from 'react'

import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import Space from '../components/Space'
import SketchPad from '../components/SketchPad'
import { FlexRow } from '../components/Flex'

const Game = ({}) => {
  let el = {}

  return (
    <main className="game">
      <FlexRow>
        <Space height="60vh" width="20vw">
          <Sidebar />
        </Space>
        <div ref={ref => (el = ref)} style={{ width: '100%', height: '60vh' }}>
          <SketchPad brushColor="red" height={el.height} />
        </div>
      </FlexRow>
      <Space height="40vh" width="100vw">
        <ChatContainer />
      </Space>
    </main>
  )
}

export default Game
