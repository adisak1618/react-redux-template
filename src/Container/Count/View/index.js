import React from 'react'

export default ({dispatch, counter, plus, minus}) => (
  <div>

    <h1>Count App</h1>
    <h2>{counter}</h2>
    <button onClick={e => {
      e.preventDefault()
      plus()
    }}>+</button>
    <button onClick={e => {
      e.preventDefault()
      minus()
    }}>+</button>
  </div>
)
