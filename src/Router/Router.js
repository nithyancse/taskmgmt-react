import React from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom'
import { RouterStore } from 'react-router-mobx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import store from '../Stores/stores'
import RedirectTo from '../Constant/RedirectTo'
import HomePage from '../Component/Layout/HomePage'
import LoginPage from '../Component/Layout/Login/LoginPage'
import SignupPage from '../Component/Layout/Login/SignupPage'
import NamePage from '../Component/Layout/NameCompany/NamePage'
import CompanyPage from '../Component/Layout/NameCompany/CompanyPage'
import HomeMainPage from '../Component/Layout/Home/HomeMainPage'

axios.defaults.baseURL = 'http://localhost:9000/taskmgmt';

const Router = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route exact path='/' component={HomePage} />
          <Route path={RedirectTo.LOGIN} component={LoginPage} />
          <Route path={RedirectTo.SIGNUP} component={SignupPage} />
          <Route path={RedirectTo.ADD_NAME} component={NamePage} />
          <Route path={RedirectTo.ADD_COMPANY} component={CompanyPage} />
          <Route path={RedirectTo.HOME} component={HomeMainPage} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default Router