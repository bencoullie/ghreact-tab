import './simpleAPI.css'

import React, { Component } from 'react'

const config = {
  mode: 'no-cors' // 'cors' by default
}

class SimpleAPI extends Component {
  componentWillMount () {
    fetch('http://itsthisforthat.com/api.php?json', config).then(response => {
      response.json().then(data => {
        console.log(data)
      })
    })
  }

  render () {
    return (
      <div className='simpleAPI-wrapper'>
        <div>
          <h1>This should be centered</h1>
        </div>
      </div>
    )
  }
}

export default SimpleAPI
