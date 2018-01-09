import './simpleAPI.css'

import React, { Component } from 'react'

class SimpleAPI extends Component {
  constructor () {
    super()
    this.state = {
      fact: ''
    }
  }

  componentDidMount () {
    fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes').then(response => {
      response.json().then(data => {
        this.setState({ fact: data[0] })
        document.getElementsByClassName('simpleAPI-wrapper')[0].classList.add('show')
      })
    })
  }

  render () {
    return (
      <div className='simpleAPI-wrapper'>
        <div>
          <h1>{this.state.fact}</h1>
        </div>
      </div>
    )
  }
}

export default SimpleAPI
