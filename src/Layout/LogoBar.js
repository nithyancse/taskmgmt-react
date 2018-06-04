import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'
import { observer } from 'mobx-react';
import store from './LoginStore';
import { Redirect } from 'react-router'

@observer
class LogoBar extends Component {

    handleClick() {
        store.isLoggedIn = "Logout"
    }

    render() {

        if (store.isLoggedIn == "Logout") {
            return <Redirect to="/" />;
        }

        const loginStatus = store.isLoggedIn == "Login" ? true : false;

        return (
            <div className="logoBar" >
                <Image src="public/images/taskMgmtLogo.png" size='tiny' verticalAlign='middle' />
                <span className="ui header title">Task Management</span>
                {loginStatus &&
                    <a className="floatRight" href='#' onClick={this.handleClick.bind(this)}>Logout</a>
                }
            </div>
        )
    }
}

export default LogoBar
