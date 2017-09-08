import React from 'react'
import { connect } from 'react-redux'

import { authenticate, listenForAuthState } from '../../store/auth/actions'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(listenForAuthState())
    this.props.dispatch(authenticate())
  }

  render() {
    const { children, isLogged } = this.props
    return (
      <div>
        {isLogged ? children : 'loading...'}
      </div>
    )
  }
}

export default connect(
  state => ({ ...state.auth })
)(App)
