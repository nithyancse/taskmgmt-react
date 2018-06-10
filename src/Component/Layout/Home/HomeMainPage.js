import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Redirect } from 'react-router'
import Header from '../Header'

@inject(['store'])
@observer
class HomeMainPage extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className="content"> Hi {this.props.store.home.user.name}, Welcome to Task Management Application !! </div>
            </div>
        )
    }
}

export default HomeMainPage