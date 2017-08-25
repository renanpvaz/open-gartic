import React from 'react'

import Space from '../components/Space'
import Button from '../components/Button'
import { FlexRow, FlexColumn, FlexCenter } from '../components/Flex'

import './home.css'

const Home = ({ primary }) => (
  <main className="home">
    <section>
      <h1>Open<strong>Gartic</strong></h1>
      <FlexColumn>
        <Space padding={8}>
          <Button primary size="s">small primary</Button>
        </Space>
        <Space padding={8}>
          <Button primary size="m">regular primary</Button>
        </Space>
        <Space padding={8}>
          <Button primary size="l">large primary</Button>
        </Space>
        <Space padding={8}>
          <Button primary size="xl">extra-large primary</Button>
        </Space>
        <Space padding={8}>
          <Button disabled>regular disabled</Button>
        </Space>
        <Space padding={8}>
          <Button ghost primary>regular ghost</Button>
        </Space>
      </FlexColumn>
    </section>
  </main>
)

export default Home
