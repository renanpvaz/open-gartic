import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { isLogged } from '../../store/auth'
import * as actions from '../../store/auth/actions'

class App extends React.Component {
  componentDidMount() {
    this.props.listenForAuthState()
    this.props.isLogged || this.props.authenticate()
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
  state => ({ isLogged: isLogged(state) }),
  dispatch => bindActionCreators(actions, dispatch)
)(App)
