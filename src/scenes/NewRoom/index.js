import React from 'react'
import firebase from 'firebase'
import { compose, withProps, withStateHandlers, withHandlers } from 'recompose'

import withCollection from '../../HOCs/with-collection'
import withCurrentUser from '../../HOCs/with-current-user'

import Space from '../../components/Space'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import Tag from '../../components/Tag'
import Flex from '../../components/Flex'
import Label from '../../components/Label'
import Form from '../../components/Form'

const enhance = compose(
  withCurrentUser(firebase),
  withCollection(firebase, 'rooms'),
  withStateHandlers(
    () => ({
      words: [],
      name: '',
      newWord: '',
      timeToDraw: '',
      numberOfUsers: '',
    }),
    {
      onFieldChange: () => target => ({ [target.name]: target.value }),
      onAddWord: ({ newWord, words }) => target => ({
        newWord: '',
        words: newWord.length ? [...words, newWord] : words
      })
    }
  ),
  withHandlers({
    onSubmit: ({
      currentUser,
      rooms,
      name,
      words,
      timeToDraw,
      numberOfUsers
    }) => () => rooms.persist(name, {
      owner: currentUser().id,
      words,
      timeToDraw,
      numberOfUsers
    })
  })
)

const NewRoom = ({
  words,
  timeToDraw,
  numberOfUsers,
  newWord,
  name,
  onFieldChange,
  onAddWord,
  onSubmit
}) => (
  <Flex.Column>
    <Form
      primaryAction={<Button onClick={onSubmit} primary>create room</Button>}
      secondaryAction={<Button>cancel</Button>}
    >
      <Label>
        Room name
        <TextInput
          name="name"
          onChange={onFieldChange}
          autoFocus
          value={name}
        />
      </Label>
      <Label>
        Time to draw
        <TextInput
          name="timeToDraw"
          onChange={onFieldChange}
          autoFocus
          value={timeToDraw}
        />
      </Label>
      <Label>
        Number of users
        <TextInput
          name="numberOfUsers"
          onChange={onFieldChange}
          value={numberOfUsers}
        />
      </Label>
      <Label info="press enter to add">
        Word list
        <TextInput
          name="newWord"
          onChange={onFieldChange}
          onPressEnter={onAddWord}
          value={newWord}
        />
      </Label>
      <Flex.Wrap>{words.map(word => <Tag>{word}</Tag>)}</Flex.Wrap>
    </Form>
  </Flex.Column>
)

export default enhance(NewRoom)
