import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Redirect } from 'react-router'
import LogoBar from '../Layout/LogoBar'
import homeStore from './HomeStore';


@observer
class Home extends Component {

    render() {
        
        return (
            <div>
                <LogoBar />
                <div className="content"> Hi {homeStore.user.name}, Welcome to Task Management Application !! </div>
            </div>
        )
    }
}

export default Home