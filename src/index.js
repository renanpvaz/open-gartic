import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import './index.css'
import Game from './Game'
import Home from './Home'
import registerServiceWorker from './registerServiceWorker'

const history = createHistory()
const middleware = routerMiddleware()

const store = createStore(
  combineReducers({
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/game" component={Game}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
