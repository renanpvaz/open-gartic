import React from 'react'
import ReactDOM from 'react-dom'
import * as firebase from 'firebase'

import thunk from 'redux-thunk'
import multi from 'redux-multi'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'

import createHistory from 'history/createBrowserHistory'
import { Route, Switch } from 'react-router'

import App from './scenes/App'
import Game from './scenes/Game'
import Home from './scenes/Home'
import InitialScreen from './scenes/InitialScreen'
import NewRoom from './scenes/NewRoom'
import reducers from './store/reducers'

import './index.css'
import registerServiceWorker from './registerServiceWorker'

const history = createHistory()

firebase.initializeApp({
  apiKey: "AIzaSyAQ-8ciFkzyRkCtoxsflrPyGjMRVMOd93Q",
  authDomain: "open-gartic.firebaseapp.com",
  databaseURL: "https://open-gartic.firebaseio.com",
  projectId: "open-gartic",
  storageBucket: "open-gartic.appspot.com",
  messagingSenderId: "83017664694"
})

const store = createStore(
  combineReducers({
    router: routerReducer,
    ...reducers
  }),
  applyMiddleware(
    routerMiddleware(history),
    thunk,
    multi,
    createLogger({
      predicate: (getState, action) => action.type !== 'SET_POSITION'
    })
  )
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route path="/room/:name" component={Game} />
          <Home>
            <Route exact path="/" component={InitialScreen} />
            <Route exact path="/new-room" component={NewRoom} />
          </Home>
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
