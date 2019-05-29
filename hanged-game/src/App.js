import React, { Component } from 'react'
import shuffle from 'lodash.shuffle'

import './App.css'

class App extends Component {

  generateWord() {
    const result = []
    const size = SIDE * SIDE
    const candidates = shuffle(SYMBOLS)
    while (result.length < size) {
      const card = candidates.pop()
      result.push(card, card)
    }
    return shuffle(result)
  }

  generateMask() {
    const result = []
    const size = SIDE * SIDE
    const candidates = shuffle(SYMBOLS)
    while (result.length < size) {
      const card = candidates.pop()
      result.push(card, card)
    }
    return shuffle(result)
  }

  render() {

    return (
      <div className="hanged">

      </div>
    )
  }
}

export default App