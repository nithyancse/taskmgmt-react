import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { RouterStore } from 'react-router-mobx';
import LoginPage from './Component/Login/LoginPage'
import AddName from './Component/Login/AddNamePage'
import AddCompany from './Component/Login/AddCompanyPage'
import Home from './Component/Home/HomePage'

const routerStore = new RouterStore();

const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={LoginPage} routerStore={routerStore} />
      <Route path="/addName" component={AddName} routerStore={routerStore} />
      <Route path="/addCompany" component={AddCompany} routerStore={routerStore} />
      <Route path="/home" component={Home} routerStore={routerStore} />
    </Switch>
  </main>
)

export default Router