import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, compose, combineReducers } from 'redux'



// Import reducer
import { counter } from './Container/Count/reducer'

// Import App Module
import Count from './Container/Count'

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const reducer = combineReducers({counter})

let store = createStore(reducer, window.devToolsExtension && window.devToolsExtension())

ReactDOM.render(
  <Provider store={store}>
    <Count/>
  </Provider>,
  document.getElementById('root')
);
