import React from 'react'
import { Route } from 'react-router-dom'

import App from '../App'
import Test from '../views/test'

export default function router() {
  return (
    <>
      <Route path="/" exact component={App}></Route>
      <Route path="/test" component={Test}></Route>
    </>
  )
}
