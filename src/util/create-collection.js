const createCollection = (
  provider = { database: () => {} },
  path
) => ({
  create: data => provider.database().ref(path).push(data),
  persist: (key, data) => provider.database().ref(`${path}/${key}`).set(data),
  update: (key, changes) => provider.database().ref(`${path}/${key}`).update(changes),
  findOne: key => (
    provider.database()
      .ref(`${path}/${key}`)
      .once('value')
      .then(result => result.val())
  ),
  ref: () => provider.database().ref(path),
  listenFor: (event, callback) => provider.database().ref(path)
    .on(event, snapshot => callback(snapshot.val()))
})

export default createCollection
