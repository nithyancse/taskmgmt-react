import React from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom'
import { RouterStore } from 'react-router-mobx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import store from '../Stores/stores'
import Common from '../Constant/Common'
import HomePage from '../Component/Layout/HomePage'
import LoginPage from '../Component/Layout/Login/LoginPage'
import SignupPage from '../Component/Layout/Login/SignupPage'
import AddNamePage from '../Component/Layout/AddNamePage'
import AddCompanyPage from '../Component/Layout/AddCompanyPage'
import HomeMainPage from '../Component/Layout/Home/HomeMainPage'

axios.defaults.baseURL = 'http://localhost:9000/taskmgmt';

const Router = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route exact path='/' component={HomePage} />
          <Route path={Common.LOGIN} component={LoginPage} />
          <Route path={Common.SIGNUP} component={SignupPage} />
          <Route path={Common.ADD_NAME} component={AddNamePage} />
          <Route path={Common.ADD_COMPANY} component={AddCompanyPage} />
          <Route path={Common.HOME} component={HomeMainPage} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default Router