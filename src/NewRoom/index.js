import React from 'react'
import { compose, withState, mapProps } from 'recompose'

import Space from '../components/Space'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import Tag from '../components/Tag'
import Flex from '../components/Flex'

const enhance = compose(
  withState('words', 'setWords', ['open', 'gartic', 'is', 'so', 'cool','open', 'gartic', 'is', 'so', 'cool','open', 'gartic', 'is', 'so', 'cool','open', 'gartic', 'is', 'so', 'cool']),
)

const NewRoom = ({ words, setWords }) => (
  <Flex.Column>
    <Space fit pY={0}>
      <TextInput autoFocus big placeholder="time to draw" value="" />
    </Space>
    <Space fit pY={0}>
      <TextInput autoFocus big placeholder="number of users" value="" />
    </Space>
    <Space fit pY={0}>
      <TextInput autoFocus big placeholder="words" value="" />
    </Space>
    <Flex.Wrap>{words.map(word => <Tag>{word}</Tag>)}</Flex.Wrap>
  </Flex.Column>
)

export default enhance(NewRoom)
