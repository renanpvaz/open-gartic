import React from 'react'
import ReactDOM from 'react-dom'
import * as firebase from 'firebase'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route, Redirect, Switch } from 'react-router'

import './index.css'
import Game from './Game'
import Home from './Home'
import InitialScreen from './InitialScreen'
import NewRoom from './NewRoom'
import registerServiceWorker from './registerServiceWorker'

const history = createHistory()
const middleware = routerMiddleware()

firebase.initializeApp({
  apiKey: "AIzaSyAQ-8ciFkzyRkCtoxsflrPyGjMRVMOd93Q",
  authDomain: "open-gartic.firebaseapp.com",
  databaseURL: "https://open-gartic.firebaseio.com",
  projectId: "open-gartic",
  storageBucket: "open-gartic.appspot.com",
  messagingSenderId: "83017664694"
})

firebase.auth().signInAnonymously()

const store = createStore(
  combineReducers({
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/room/:name" component={Game} />
        <Home>
          <Route exact path="/initial-screen" component={InitialScreen}/>
          <Route exact path="/new-room" component={NewRoom}/>
        </Home>
        <Route exact path="/" component={() => <Redirect to="/initial-screen" />}/>
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
