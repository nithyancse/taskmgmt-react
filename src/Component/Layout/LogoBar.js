import React, { Component } from 'react';
import { Image, Header } from 'semantic-ui-react'
import { observer } from 'mobx-react';
import { Redirect } from 'react-router'
import homeStore from '../Home/HomeStore';

@observer
class LogoBar extends Component {

    handleClick() {
        homeStore.isLoggedIn = "Logout"
    }

    render() {

        if (homeStore.isLoggedIn == "Logout") {
            return <Redirect to="/" />;
        }

        const loginStatus = homeStore.isLoggedIn == "Login" ? true : false;

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
