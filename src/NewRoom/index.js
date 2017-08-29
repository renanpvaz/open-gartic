import React from 'react'
import { compose, withState, mapProps, withStateHandlers } from 'recompose'

import Space from '../components/Space'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import Tag from '../components/Tag'
import Flex from '../components/Flex'
import Label from '../components/Label'
import Form from '../components/Form'

const enhance = compose(
  withStateHandlers(
    () => ({
      words: [],
      newWord: '',
      timeToDraw: '',
      numberOfUsers: '',
    }),
    {
      handleUpdate: () => target => ({ [target.name]: target.value }),
      handleEnter: ({ newWord, words }) => target => ({
        newWord: '',
        words: newWord.length ? [...words, newWord] : words
      }),
    }
  )
)

const NewRoom = ({
  words,
  timeToDraw,
  numberOfUsers,
  newWord,
  handleUpdate,
  handleEnter
}) => (
  <Flex.Column>
    <Form
      primaryAction={<Button primary>create room</Button>}
      secondaryAction={<Button>cancel</Button>}
    >
      <Label>
        Time to draw
        <TextInput
          name="timeToDraw"
          onChange={handleUpdate}
          autoFocus
          value={timeToDraw}
        />
      </Label>
      <Label>
        Number of users
        <TextInput
          name="numberOfUsers"
          onChange={handleUpdate}
          value={numberOfUsers}
        />
      </Label>
      <Label info="press enter to add">
        Word list
        <TextInput
          name="newWord"
          onChange={handleUpdate}
          onPressEnter={handleEnter}
          value={newWord}
        />
      </Label>
      <Flex.Wrap>{words.map(word => <Tag>{word}</Tag>)}</Flex.Wrap>
    </Form>
  </Flex.Column>
)

export default enhance(NewRoom)
