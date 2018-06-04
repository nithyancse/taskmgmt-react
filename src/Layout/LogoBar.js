import React, { Component } from 'react';
import { Image, Header } from 'semantic-ui-react'
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
                <Header as='h1' color='grey' >
                    <Image circular src="public/images/taskMgmtLogo.png" /> Task Management
                </Header>
                { loginStatus &&
                <a className="floatRight" href='#' onClick={this.handleClick.bind(this)}>Logout</a>
                }
            </div>
        )
    }
}

export default LogoBar
