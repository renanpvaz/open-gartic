import React from 'react'

import Space from '../components/Space'
import Button from '../components/Button'
import Divider from '../components/Divider'
import { FlexRow, FlexColumn, FlexCenter } from '../components/Flex'

import './home.css'

const Home = ({ primary }) => (
  <main className="home">
    <section>
      <h1>Open<strong>Gartic</strong></h1>
      <FlexColumn>
        <Space padding="8px 0">
          <Button primary fit size="xl">enter room</Button>
        </Space>
        <Space padding="8px 0">
          <Button fit size="xl">create room</Button>
        </Space>
      </FlexColumn>
    </section>
  </main>
)

export default Home
