import { withProps } from 'recompose'

const withCollection = (
  provider = { database: () => {} },
  path
) => withProps({
  [path]: {
    create: data => provider.database().ref(path).push(data),
    persist: (key, data) => provider.database().ref(`${path}/${key}`).set(data),
    findOne: key => (
      provider.database()
        .ref(`${path}/${key}`)
        .once('value')
        .then(result => result.val())
    )
  }
})

export default withCollection
