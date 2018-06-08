import React, { Component } from 'react';
import { Image, Header } from 'semantic-ui-react'
import { observer, inject } from 'mobx-react';
import { Redirect } from 'react-router'

@inject(['store'])
@observer
class LogoBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageToRedirect: ""
        }
    }

    handleClick() {
        this.setState({
            pageToRedirect: "Logout"
        });
    }

    render() {

        if (this.state.pageToRedirect === "Logout") {
            return <Redirect to="/" />;
        }      

        return (
            <div className="logoBar" >
                <Header as='h1' color='grey' >
                    <Image circular src="public/images/taskMgmtLogo.png" /> Task Management
                </Header>
                
                <a className="floatRight" href='#' onClick={this.handleClick.bind(this)}>Logout</a>
                
            </div>
        )
    }
}

export default LogoBar
