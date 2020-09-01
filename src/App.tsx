import React from 'react'
import logo from './logo.svg'
import { Link } from 'react-router-dom'
import './App.less'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/test">Learn React</Link>
      </header>
    </div>
  )
}

export default App
