import React from 'react'

import Space from '../components/Space'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import Divider from '../components/Divider'
import { FlexRow, FlexColumn, FlexCenter } from '../components/Flex'

import './home.css'

const Home = ({ primary }) => (
  <main className="home">
    <div className="home__content">
      <section>
        <Space mb="2">
          <h1>Open<strong>Gartic</strong></h1>
        </Space>
        <FlexColumn>
          <Space fit padding="4px 0">
            <TextInput big placeholder="room name" value="" />
          </Space>
          <Space fit padding="4px 0" mb="2">
            <TextInput big placeholder="username" value="" />
          </Space>
          <Space padding="8px 0">
            <Button primary fit size="xl">join room</Button>
          </Space>
          <Space padding="8px 0">
            <Button fit size="xl">create room</Button>
          </Space>
        </FlexColumn>
      </section>
    </div>
  </main>
)

export default Home
