import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from './Layout/LoginPage'
import MainHome from './Layout/MainHome'

import { RouterStore } from 'react-router-mobx';

const routerStore = new RouterStore();


const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={LoginPage} routerStore={routerStore}/>
      <Route path="/home" component={MainHome} />
    </Switch>
  </main>
)

export default Router