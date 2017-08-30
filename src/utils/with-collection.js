const withCollection = (
  provider = { database: () => {} },
  path
) => ({
  [path]: {
    create(data) {
      return provider.database().ref(path).push(data)
    },
    persist(key, data) {
      provider.database().ref(`${path}/${key}`).set(data)

      return this
    },
    findOne(key) {
      return provider.database()
        .ref(`${path}/${key}`)
        .once('value')
        .then(result => result.val())
    },
  }
})

export default withCollection
