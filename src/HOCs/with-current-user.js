import { withProps } from 'recompose'

const mapUser = ({ uid }) => ({
  id: uid,
})

const withCurrentUser = (provider = { auth: () => ({}) }) =>
  withProps({ currentUser: () => mapUser(provider.auth().currentUser) })

export default withCurrentUser
