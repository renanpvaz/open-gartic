import React from 'react'
import { compose, withState, mapProps } from 'recompose'

import Space from '../components/Space'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import Tag from '../components/Tag'
import Flex from '../components/Flex'
import Label from '../components/Label'
import Form from '../components/Form'

const enhance = compose(
  withState('words', 'setWords', ['open', 'gartic', 'is', 'so', 'cool','open', 'gartic', 'is', 'so', 'cool','open', 'gartic', 'is', 'so', 'cool','open', 'gartic', 'is', 'so', 'cool']),
)

const NewRoom = ({ words, setWords }) => (
  <Flex.Column>
    <Form>
      <Label required>
        Time to draw
        <TextInput autoFocus value="" />
      </Label>
      <TextInput placeholder="number of users" value="" />
      <TextInput placeholder="words" value="" />
      <Flex.Wrap>{words.map(word => <Tag>{word}</Tag>)}</Flex.Wrap>
    </Form>
  </Flex.Column>
)

export default enhance(NewRoom)
