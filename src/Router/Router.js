import React from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom'
import { RouterStore } from 'react-router-mobx'
import LoginPage from '../Component/Login/LoginPage'
import AddNamePage from '../Component/Login/AddNamePage'
import AddCompanyPage from '../Component/Login/AddCompanyPage'
import HomePage from '../Component/Home/HomePage'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import store from '../Stores/stores'

axios.defaults.baseURL = 'http://localhost:9000/taskmgmt';

const Router = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route exact path='/' component={LoginPage} />
          <Route path="/addName" component={AddNamePage} />
          <Route path="/addCompany" component={AddCompanyPage} />
          <Route path="/home" component={HomePage} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default Router