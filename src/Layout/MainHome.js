import React, { Component } from 'react';
import LogoBar from './LogoBar'
import { observer } from 'mobx-react';
import store from './LoginStore';
import { Redirect } from 'react-router'

@observer
class MainHome extends Component {

    render() {
        
        return (
            <div>
                <LogoBar />
                <div className="content"> Hi {store.user.name}, Welcome to Task Management Application !! </div>
            </div>
        )
    }
}

export default MainHome