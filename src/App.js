import './App.css'

import React, { Component } from 'react'

import SimpleAPI from './components/simpleAPI/simpleAPI.js'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <SimpleAPI />
      </div>
    )
  }
}

export default App
