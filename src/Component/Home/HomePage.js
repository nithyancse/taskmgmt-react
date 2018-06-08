import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Redirect } from 'react-router'
import LogoBar from '../Layout/LogoBar'

@inject(['store'])
@observer
class HomePage extends Component {

    render() {
        return (
            <div>
                <LogoBar />
                <div className="content"> Hi {this.props.store.home.user.name}, Welcome to Task Management Application !! </div>
            </div>
        )
    }
}

export default HomePage