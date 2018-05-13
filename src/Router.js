import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from './Layout/LoginPage'


const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={LoginPage}/>
    </Switch>
  </main>
)

export default Router